<?php
switch ($_SERVER['SERVER_NAME']) {
    case "companyname.local":
        define('CRAFT_ENVIRONMENT', 'LOCAL');
        break;
    case "staging.companyname.com":
        define('CRAFT_ENVIRONMENT', 'STAGING');
        break;
    default:   // Covers "www" and non-"www"
        define('CRAFT_ENVIRONMENT', 'PRODUCTION');
        break;
}

// Path to your craft/ folder
$craftPath = '../craft';

// Move templates path into dev folder
define('CRAFT_TEMPLATES_PATH', realpath(dirname(__FILE__) . "/templates").'/');

// Do not edit below this line
$path = rtrim($craftPath, '/').'/app/index.php';

if (!is_file($path))
{
	exit('Could not find your craft/ folder. Please ensure that <strong><code>$craftPath</code></strong> is set correctly in '.__FILE__);
}

require_once $path;
