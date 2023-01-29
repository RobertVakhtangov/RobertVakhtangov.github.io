<?php
function load($className)
{
    for ($i = 0; $i < 2; $i++) {
        if ($i == 0) {
            $file = $className . ".php";
        } else {
            $file = "Products/" . $className . ".php";
        }
        if (file_exists($file)) {
            include $file;
        }
    }
}

spl_autoload_register('load');
