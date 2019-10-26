const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './src/javascripts/application.js'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/styleguide/javascripts'
  }
};