/**
 * @name VueJS Cookie Component
 * @description entry script for app
 * @author Steven Morrison <https://github.com/Zaffri/>
 */


module.exports = {
    entry: '../public/js/main.js',
    output: {
        filename: '../public/js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
 
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};