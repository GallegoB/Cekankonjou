<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitea0391a19277a0cef8b674a7d9c2ef21
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitea0391a19277a0cef8b674a7d9c2ef21', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitea0391a19277a0cef8b674a7d9c2ef21', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitea0391a19277a0cef8b674a7d9c2ef21::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
