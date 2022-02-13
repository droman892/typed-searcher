const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        port: 8000,
        historyApiFallback: true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify(process.env),
        }),
        new ReactRefreshWebpackPlugin(),
        new Dotenv(),
    ],
}
