const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const devConfig = require('./webpack.dev.config.js')
const prodConfig = require('./webpack.prod.config.js')
const merge = require('webpack-merge')

let baseConfig = {
  entry: {
    app: process.env.NODE_ENV === 'development' ? ['webpack-hot-middleware/client', './src/main.js'] : ['./src/main.js'],
    vendor: Object.keys(require('./package.json').dependencies)
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: process.env.NODE_ENV === 'production'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './imgs/[hash].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './fonts/[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('styles.css')
  ]
}

let output = merge(baseConfig, devConfig, prodConfig)

module.exports = output