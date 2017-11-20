#!/bin/bash

sudo apt update && sudo apt upgrade -y

#
# Front End Setups
#

# for node v8
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
# for yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list  
sudo apt install build-essential nodejs yarn -y
(cd web && yarn install)

#
# Install PHP
#
sudo apt install php7.0 php7.0-mcrypt php7.0-gd php7.0-mbstring php7.0-xml php7.0-zip libapache2-mod-php7.0 apache2 php7.0-mysql -y

#
# Install composer
# 
(cd api \
&& php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
&& php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
&& php composer-setup.php \
php -r "unlink('composer-setup.php');")

#
# Setup Directories
#
mkdir -p api/logs
sudo chown www-data -R api/storage
sudo chown www-data -R api/bootstrap/cache

#
# Setup Apache
#
CONF_PATH=/etc/apache2/sites-available/laravel.conf
echo "Writing apache config file to ${CONF_PATH}"
sed "s|:::PROJECTDIR:::|$(cd api && pwd)|" api/.site.conf | sudo tee ${CONF_PATH}

sudo a2dissite 000-default.conf
sudo a2ensite laravel.conf
sudo a2enmod rewrite
sudo service apache2 restart

#
# App dependencies
#
(cd api && php composer.phar install)
(cd api && cp .env.example .env)
(cd api && php artisan key:generate)

source api/.env

checkIfEmpty() {
  # ${!1} is a variable variable
  # Just checking that the variable is set in the environment
  if [ -z "${!1}" ] 
    then
      echo "ERROR: \$$1 must be set in the env prior to running the script."
      exit 1
  fi
}

checkIfEmpty DB_DATABASE
checkIfEmpty DB_HOST
checkIfEmpty DB_USERNAME
checkIfEmpty DB_ADMIN_USERNAME

db="\`$DB_DATABASE\`"
user="\`$DB_USERNAME\`@\`$DB_HOST\`" 
query0="DROP DATABASE IF EXISTS $db"
query1="CREATE USER IF NOT EXISTS $user IDENTIFIED BY '$DB_PASSWORD'"
query2="CREATE DATABASE IF NOT EXISTS $db" 
query3="GRANT ALL ON $db.* TO $user"

echo "$query0;$query1;$query2;$query3;" | mysql -u $DB_ADMIN_USERNAME -p$DB_ADMIN_PASSWORD

(cd api && php artisan migrate --seed)
