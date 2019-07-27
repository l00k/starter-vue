const path = require('path')
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = process.env.NODE_ENV == 'production'
    ? 'production'
    : 'development'

console.log('Mode: ' + mode)

module.exports = {
    mode: mode,
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'sm-fix-loader' },
                    { loader: 'babel-loader', options: { sourceMap: true } },
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'sm-fix-loader' },
                    { loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/], } },
                ],
            },
            {
                test: /\.s?css$/,
                use: [
                    { loader: 'vue-style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sm-fix-loader' },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ]
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
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'loaders')
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs'
        }),
    ]
}

if(mode === 'production')
{
    module.exports.devtool = 'source-map'
    module.exports.performance = {
        hints: 'warning',
        maxEntrypointSize: 250000,
        maxAssetSize: 2500000
    }
    
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
else if(mode == 'development')
{
    module.exports.devtool = 'source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin({})
    ])
    module.exports.devServer = {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        hot: true,
        liveReload: false,
    }
}
