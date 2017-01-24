module.exports = {
  entry : __dirname + '/src/index.js',
  output : {
    path: __dirname +'/build',
    filename: 'bundle.js'
  },
  module : {
    // rules:[
    //   {
    //     test : /\.js$/,
    //     exclude : /(node_modules | bower_components)/,
    //     enfore:'pre',
    //     use:[{loader:'eslint-loader'}]
    //   }
    // ],

    loaders : [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test : /\.js$/,
        exclude : /(node_modules | bower_components)/,
        loader : 'babel-loader',
        query :{
          presets : ['es2015','react']
        }
      }
    ]
  }
}
