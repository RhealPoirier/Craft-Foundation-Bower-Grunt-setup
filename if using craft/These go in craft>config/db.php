<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 * modify the dabase setting for your specific environments
 */

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    'LOCAL' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => 'password',
        'database' => 'database',
    ),
    'STAGING' => array(
        'server' => 'stagingServer',
        'user' => 'stagingServerName',
        'password' => 'StaginfPassword',
        'database' => 'StagingPassword',
    ),
    'PRODUCTION' => array(
        'server' => 'productionServer',
        'user' => 'productionUserName',
        'password' => 'ProductionPassword',
        'database' => 'ProductionDatabase',
    ),
);