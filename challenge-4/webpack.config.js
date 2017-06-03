const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundle.js'
  },
  devServer: {
    hot: true,
    overlay: true,
    quiet: true
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
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [autoprefixer({
            'browsers': ['last 4 versions']
          })],
          extractCSS: process.env.NODE_ENV === 'production'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: './imgs/[hash].[ext]'
          }
        }
      },
      {
        test: /\.(woof2?|eot|ttf|otf)/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: './fonts/[hash].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json', '.sass', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

if (process.env.NODE_ENV) {
  config.plugins.push(
    new BabiliPlugin({
      removeConsole: true
    }),
    new OptimizeCssAssetsPlugin(),
    new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin({
      from: './static',
      to: './dist'
    })
  )
}

module.exports = config