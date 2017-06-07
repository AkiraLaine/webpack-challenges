const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = process.env.NODE_ENV === 'development' ? {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
} : {}