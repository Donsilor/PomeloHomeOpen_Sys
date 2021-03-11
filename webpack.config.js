const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPugin = require('html-webpack-pugin')
module.exports= {
  entry:{
    index:'./src/main.js'
  },
  output:{
    path:path.resolve('./dist'),
    filename:'[name].js'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPugin({
      filename:'4444.html',
      template:'./index.html'
    })
  ]
}