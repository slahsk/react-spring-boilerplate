var webpack = require('webpack');
var OpenBrowerPlugin = require('open-browser-webpack-plugin');
var path = require('path');


module.exports = {
  entry :__dirname + '/src/index.js',
  output : {
    path: __dirname ,
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test : /\.js$/,
        exclude : /(node_modules | bower_components)/,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: '[path][name].[ext]?[hash]',
          limit: 10000,
        }
      }
    ]
  },
  plugins : [
      new OpenBrowerPlugin({url:'http://localhost:8080'})
  ]
}
