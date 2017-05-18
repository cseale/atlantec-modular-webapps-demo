const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      })
    },{
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },{
      test: /\.html$/,
      use: 'raw-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin('generated.css')
  ]
};