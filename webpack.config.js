var webpack = require('webpack'),
  path = require('path');

module.exports = {
  devtool: '#eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(c|le)ss$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(woff|png|jpg|gif|svg|mp4)$/,
        loader: 'file-loader?name=static/[name].[ext]'
      }
    ]
  }
};
