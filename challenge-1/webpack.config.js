const webpack = require('webpack')
const path = require('path')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = (env) => {
  return {
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(vue|js)$/,
          enforce: 'pre',
          use: 'eslint-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }
      ]
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'assets')
      },
      extensions: ['.vue', '.js']
    },
    plugins: !env.production
      ? [new webpack.HotModuleReplacementPlugin()]
      : [new BabiliPlugin()]
  }
}