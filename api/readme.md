Setup Instructions
------------------

#### Setup PHP
```
./php-setup.sh
```

#### Set Environment
Update the `.env` file with your local database info, or you can leave the
defaults, **BUT...**

In order to create the application's database user and database, we must have
access to the root user.  Those credentials must be in the `DB_ADMIN_USERNAME`
and `DB_ADMIN_PASSWORD` environment variables. The easiest way to add those is
to include them in your `.env` file. 

#### Setup the Database
**MySQL MUST BE INSTALLED ALREADY**. It's not reasonable to script the install
of the server due to the security precautions in the install.  You DO NOT need to create the app's database or user.

```
./db-setup.sh
```
