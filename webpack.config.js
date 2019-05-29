const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
    library: 'Wue',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },
  mode: 'development'
};
