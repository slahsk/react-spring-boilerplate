var webpack = require('webpack');
var OpenBrowerPlugin = require('open-browser-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  devtool : 'eval-source-map',
  entry :__dirname + '/src/index.js',
  output : {
    path: __dirname+'/build/',
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
        test: /\.js?$/,
        loader: 'babel', //babel v5
        //loader : 'babel-loader' //babel v6 (devtool -> v5)
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
         loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[path][name]__[local]--[hash:base64:5]')
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },

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
      new OpenBrowerPlugin({url:'http://localhost:9090'}), //자동으로 브라우져 열기
      new ExtractTextPlugin('style.css'), //css 파일 추출
      new CopyWebpackPlugin([ //파일 복사
       { from: 'src/styles/sb-admin.css', to: 'sb-admin.css' }
     ]),
      new webpack.DefinePlugin({//환경설정 모드
         'process.env' : {
            'NODE_ENV': '"development"'
          }
      }),
      new webpack.ProvidePlugin({
        fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })

  ],
  resolve: {
    extensions: ['', '.js'], //import시 .js 생략 가능
    root: [
      path.resolve('./src') //import시 root 위치 지정
    ]
  }



}
