const path = require('path');

module.exports = {
  mode: 'development',
  entry:'./src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  output:{
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  }
}