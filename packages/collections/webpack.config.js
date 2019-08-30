const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const developmentConfig = {
  mode: 'development',
  entry: ['babel-polyfill', './dev/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devtool: 'eval-source-map',
}

const productionConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  output: {
    library: '__ecom_netlify_cms_collections',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  externals: {
    'netlify-cms': {
      commonjs: 'netlify-cms',
      commonjs2: 'netlify-cms',
      root: 'CMS'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    }
  }
}

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig
