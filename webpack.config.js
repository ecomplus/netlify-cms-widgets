'use strict'

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')

const config = {
  mode: devMode ? 'development' : 'production',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    library: '__ecom_netlify_widgets',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'test')
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components|dist\/main)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  externals: devMode ? '' : {
    'netlify-cms': {
      commonjs: 'netlify-cms',
      commonjs2: 'netlify-cms',
      root: 'CMS'
    }
  }
}

module.exports = config
