const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.config()

const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
        publicPath: '/typed-searcher/',
        // Use the path below (instead of /) for when deploying to GitHub Pages; have Bundle Analyzer commented out
        // publicPath: '/typed-searcher/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'source',
                    to: 'dest',
                    noErrorOnMissing: true,
                },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: '../typed-searcher/src/assets/images/logo.png',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new Dotenv(),
    ],
}
