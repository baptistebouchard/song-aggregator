const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css',
});
module.exports = {
  devtool: 'sourcemap',
  entry: './app/index.js',
  output: {
    filename: '../public/js/bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './public/images', to: '../public/images' },
      { from: './public/index.html', to: '../public/index.html' },
      { from: './main.css', to: '../public/css/main.css' },
    ]),
    extractPlugin,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },{
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
};