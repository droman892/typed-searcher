const path = require('path');

module.export = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3001,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};