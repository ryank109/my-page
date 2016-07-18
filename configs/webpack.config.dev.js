'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./webpack.config.base.js');
var VENDOR_DEPENDENCIES = config.entry.vendor;

config.devtool = 'cheap-module-eval-source-map';
config.entry = {
  desktop: [path.join(__dirname, '../app/main.jsx'), 'webpack-hot-middleware/client' ],
  phone: [path.join(__dirname, '../phone-app/main.jsx'), 'webpack-hot-middleware/client' ],
  vendor: VENDOR_DEPENDENCIES.concat(['webpack-hot-middleware/client'])
};
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = config;
