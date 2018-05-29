/**
 * @name VueJS Cookie Component
 * @description entry script for app
 * @author Steven Morrison <https://github.com/Zaffri/>
 */

// module.exports = {
//     entry: '../public/js/main.js',
//     output: {
//         filename: '../public/js/bundle.js'
//     },
//     watch: true,
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 }
//             },
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             }
//         ]
//     },
 
//     resolve: {
//         alias: {
//             vue: 'vue/dist/vue.js'
//         }
//     }
// };


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
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
 
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};