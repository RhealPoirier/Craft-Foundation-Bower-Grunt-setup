<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

// Ensure our urls have the right scheme
define('URI_SCHEME',  ( isset($_SERVER['HTTPS'] ) ) ? "https://" : "http://" );

// The site url
define('SITE_URL',    URI_SCHEME . $_SERVER['SERVER_NAME'] . '/');

// The site basepath
define('BASEPATH', 	  realpath(dirname(__FILE__) . '/../') . '/');



    // Give us more useful error messages
    
		return array(
		    '*' => array(
					// Environmental variables
					// We can use these variables in the URL and Path settings 
					// within the Craft Control Panel. For example:
					//    siteUrl   can be referenced as {siteUrl}
					//    basePath  can be referenced as {basePath} 
					'environmentVariables' => array(
						'basePath' => BASEPATH,
						'siteUrl'  => SITE_URL
					),

					// Triggers
					// It's a good idea to change these paths to make it harder for hackers www.yourwebsite.com/admin
					'cpTrigger' 		  => 'admin',
					'resourceTrigger' => 'resources',
					'actionTrigger' 	=> 'actions',
					'pageTrigger' 		=> 'p',

					// Member login info duration
					// http://www.php.net/manual/en/dateinterval.construct.php
					'userSessionDuration'           => 'P1M',
					'rememberedUserSessionDuration' => 'P1M',
					'rememberUsernameDuration'      => 'P1M',
 
					// User account related paths
					'loginPath'              => 'login',
					'logoutPath'             => 'logout',
					'setPasswordPath'        => 'setpassword',
					'setPasswordSuccessPath' => '',
					'activateAccountPath'    => 'activate',
					'activateFailurePath'    => '',
					'omitScriptNameInUrls' => true,
					// Manage our routes in the craft/config/routes.php file
					// 'siteRoutesSource'   => 'file',
	
		    ),
		    'LOCAL' => array(
		    	'devMode' => true
		    ),
		    'STAGING' => array(),
		    'PRODUCTION' => array(),
		);