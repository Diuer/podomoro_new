// webpack.config.prod.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  // resolve: {
  //   extensions: ['.js'],
  //   modules: ['node_modules'],
  // },
  devtool: 'cheap-eval-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.(png|jpg)$/,
      use: 'file-loader?limit=8192&name=images/[hash:8].[name].[ext]',
    }]
    // loaders: [{
    //   test: /\.css$/,
    //   loaders: ['style', 'css']
    // }]
  }
} 