var webpack = require('webpack');
var OpenBrowerPlugin = require('open-browser-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool : 'eval-source-map',
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
        loader : 'style-loader!css-loader?modules&localIdentName=[path][name]__[local]--[hash:base64:5]'
          // 'postcss-loader?pack=default',
          // 'isomorphic-style-loader'

        // use: [
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: true,
        //       localIdentName: '[path][name]__[local]--[hash:base64:5]'
        //     }
        //   }
        // ]
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      // {
      //   test: /\.(png|jpeg|gif|svg|woff|woff2)$/,
      //   loader: 'url-loader',
      //   query: {
      //     name: '[path][name].[ext]?[hash]',
      //     limit: 10000,
      //   }
      // },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins : [
      new OpenBrowerPlugin({url:'http://localhost:8080'}),
      new ExtractTextPlugin("styles.css") //html 에 모든 css 파일을 하나로 묶어서 자동으로 링크를 생성 해준다.
  ],
  resolve: {
    extensions: ['', '.js']
  }



}
