const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.ts', 'public/js')
    .js('resources/js/carousel.js', 'public/js')
    .js('resources/js/global.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .copy('resources/images', 'public/images');
