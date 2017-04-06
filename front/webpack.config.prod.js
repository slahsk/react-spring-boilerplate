var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  entry :__dirname + '/src/index.js',
  output : {
    path: '../springboot/src/main/resources/static/build',
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
        //  loader: "style-loader!css-loader"
         loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[path][name]__[local]--[hash:base64:5]')
        //loader : 'style-loader!css-loader?modules&localIdentName=[path][name]__[local]--[hash:base64:5]'
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
      //new webpack.optimize.CommonsChunkPlugin("bootstrap.css", "font-awesome.css","sb-admin.css"),
      new ExtractTextPlugin('style.css'),
      // new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({
         'process.env' : {
            'NODE_ENV': '"production"'
          }
      }),
      new CopyWebpackPlugin([
       { from: 'src/styles/sb-admin.css', to: 'sb-admin.css' }
      ])

  ],
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve('./src') //imoㅔrt시 root 위치 지정
    ]
  }



}
