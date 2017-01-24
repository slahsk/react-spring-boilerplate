module.exports = {
  entry : __dirname + '/src/index.js',
  output : {
    path: __dirname +'/build',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
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
