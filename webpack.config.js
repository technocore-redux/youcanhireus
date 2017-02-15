// NOTE: This config is based on Webpack 1.12.12
// Upgrading to 2.x WILL break the configurations
// Require our dependencies
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    // The base directory (absolute path) for resolving the entry option
    context: __dirname,

    entry: './assets/js/index',

    output: {
        path: path.resolve('./assets/bundles/'),
        // Naming convention webpack should use for our files
        filename: '[name]-[hash].js',
    },

    plugins: [
        // Where stats about our bundles will be stored
        new BundleTracker({filename: './webpack-stats.json'}),

        // Makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQUery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [
            // Regex that tells webpack to use the following loaders on all
            // .js and .jsx files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    // Specify that we will be dealing with React code
                    presets: ['react']
                }
            }
        ]
    },

    resolve: {
        // Tells Webpack where to look for modules
        modulesDirectories: ['node_modules'],
        // Extensions that should be used to resolve modules
        extensions: ['', '.js', '.jsx']
    }
}
