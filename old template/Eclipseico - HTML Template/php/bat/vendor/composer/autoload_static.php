<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5921b3978862c41e45ce6e6e4b91baf4
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5921b3978862c41e45ce6e6e4b91baf4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5921b3978862c41e45ce6e6e4b91baf4::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}