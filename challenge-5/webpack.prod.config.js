const path = require('path')
const BabiliPlugin = require('babili-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [
    new BabiliPlugin({
      removeConsole: true
    }),
    new OptimizeCssAssetsPlugin(),
    new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'static'),
      to: path.resolve(__dirname, 'dist', 'static')
    }]),
    new CompressionPlugin()
  ] : []
}