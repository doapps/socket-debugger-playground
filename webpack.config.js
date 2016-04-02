var path = require( 'path' );

module.exports = {
  entry: path.join( __dirname, 'app/main.js' ),
  output: {
    path: path.join( __dirname, 'public' ),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devtool: '#eval',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '', '.json', '.js', '.jsx' ],
    modulesDirectories: [ 'node_modules', path.join( __dirname, 'app' ) ]
  }
};