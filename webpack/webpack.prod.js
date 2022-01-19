// const webpack = require('webpack')
// const BundleAnalyzerPlugin =
//     require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    // devtool: 'source-map',
    // devtool was commented out and performance was added 1-18-22
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.name': JSON.stringify('Roman'),
    //     }),
    //     new BundleAnalyzerPlugin(),
    // ],
}
