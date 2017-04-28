const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './modules/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015',
          'react'
        ],
      },
      include: [
        path.resolve(__dirname, 'modules')
      ]
    }]
  }
};