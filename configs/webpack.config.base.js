var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

var projectName = 'rk';

var VENDOR_DEPENDENCIES = [
  'classnames',
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'react-redux-popup',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-thunk',
  'reselect',
  'rsvp'
];

var NODE_ENV = process.env.NODE_ENV;
var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};
env.build = env.production || env.staging;

var mainCss = new ExtractTextPlugin(projectName + '.[name].css');
var iconCss = new ExtractTextPlugin('icons.css');

var config = {
  entry: {
    desktop: path.join(__dirname, '../app/main.jsx'),
    phone: path.join(__dirname, '../phone-app/main.jsx'),
    vendor: VENDOR_DEPENDENCIES
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: projectName + '.[name].js',
    publicPath: '/'
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'app',
      'phone-app'
    ],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.' + projectName + '.js'),
    mainCss,
    iconCss
  ],

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        include: [ path.join(__dirname, '../app'), path.join(__dirname, '../phone-app') ],
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '../styles'),
        loader: mainCss.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '../node_modules/font-awesome/scss'),
        loader: iconCss.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader : 'url?prefix=font/&limit=10000'
      }
    ]
  },

  postcss: [ autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] }) ]
};

config.resolve.alias = {};
config.resolve.alias[projectName] = path.resolve(__dirname, '../app');
config.resolve.alias['phone'] = path.resolve(__dirname, '../phone-app');
module.exports = config;
