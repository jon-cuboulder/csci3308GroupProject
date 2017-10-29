#!/bin/bash

#
# Install PHP
#
sudo apt update && sudo apt upgrade -y
sudo apt install php7.0 php7.0-mcrypt php7.0-gd php7.0-mbstring php7.0-xml php7.0-zip libapache2-mod-php7.0 apache2 php7.0-mysql -y

#
# Install composer
# 
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

#
# Setup Directories
#
mkdir logs
sudo chown www-data -R storage
sudo chown www-data -R bootstrap/cache

#
# Setup Apache
#
CONF_PATH=/etc/apache2/sites-available/laravel.conf
echo "Writing apache config file to ${CONF_PATH}"
sed "s|:::PROJECTDIR:::|$(pwd)|" .site.conf | sudo tee ${CONF_PATH}

sudo a2dissite 000-default.conf
sudo a2ensite laravel.conf
sudo a2enmod rewrite
sudo service apache2 restart

#
# App dependencies
#
php composer.phar install
cp .env.example .env
php artisan key:generate
