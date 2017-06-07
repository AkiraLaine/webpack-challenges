const path = require('path')
const webpack = require('webpack')
const output = require('../webpack.config.js')
const del = require('del')

del([path.resolve(__dirname, '..', 'dist')])
  .then(sucess => {
    console.log(sucess)
  }, err => console.log(err))

webpack(output, (err, stats) => {
  if (err) console.log(err)
})

