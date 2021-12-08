const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV || "development",
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
              loader: "babel-loader"
            }
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
            test: /\.(css|scss)$/,
            use: [
              "style-loader", 
              "css-loader"
            ]
        },
        {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"],
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'AMAZING Typed Searcher',
        template: 'public/index.html'
    }),
    new MiniCssExtractPlugin()      
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
};