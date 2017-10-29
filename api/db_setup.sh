#!/bin/bash

source .env

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
checkIfEmpty DB_ADMIN_PASSWORD

db="\`$DB_DATABASE\`"
user="\`$DB_USERNAME\`@\`$DB_HOST\`" 
query1="CREATE USER IF NOT EXISTS $user IDENTIFIED BY '$DB_PASSWORD'"
query2="CREATE DATABASE IF NOT EXISTS $db" 
query3="GRANT ALL ON $db.* TO $user"

echo "$query1;$query2;$query3;" | mysql -u $DB_ADMIN_USERNAME -p$DB_ADMIN_PASSWORD
