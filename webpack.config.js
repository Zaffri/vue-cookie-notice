const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            include: __dirname,
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            },
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.css$/,
            loader: 'style!less!css'
        }
        ]
    },
    externals: {
        'css-loader': 'cssLoader',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize : true,
            sourceMap : false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
};


module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'vue-cookie-notice.min.js',
            libraryTarget: 'window',
            library: 'VueCookieNotice',
        }
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/CookieNotice.vue'),
        output: {
            filename: 'vue-cookie-notice.js',
            libraryTarget: 'umd',
            library: 'vue-cookie-notice',
            umdNamedDefine: true
        }
    })
];