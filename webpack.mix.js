const mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const resourcesAssets = 'resources/js/assets/';
const dest = 'public/';

// if (!mix.inProduction()) {
//     mix.bundleAnalyzer({
//         analyzerMode: 'server',
//         generateStatsFile: true,
//     });
// }

mix.ts('resources/js/app.js', 'public/js')
    .copy(`${resourcesAssets}images`, `${dest}images`)
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .options({
        legacyNodePolyfills: false
    });
