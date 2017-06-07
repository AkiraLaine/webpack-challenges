const express = require('express')
const app = express()
const webpack = require('webpack')
const config = require('../webpack.config.js')
const webpackConfig = webpack(config)
const path = require('path')
const opn = require('opn')
const webpackHMRPlugin = require("webpack-hot-middleware")(webpackConfig)
const webpackMiddleware = require("webpack-dev-middleware")(webpackConfig, {
  quiet: true,
  overlay: true
})

webpackConfig.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, done) => {
    webpackHMRPlugin.publish('HTML_CHANGED')
    done()
  })
})

app.use(webpackMiddleware)
app.use(webpackHMRPlugin)

webpackMiddleware.waitUntilValid(() => {
  opn('http://localhost:8080')
})

app.listen(8080)