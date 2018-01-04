var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    "inject": __dirname + "/app/inject/inject.js",
    "background": __dirname + "/app/background/background.js",
    "option": __dirname + "/app/option/option.js"
  },
  output: {
    path: __dirname + "/app/dist",
    filename: "[name].entry.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
}

if (process.env.NODE_ENV === 'dev') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ])
}

console.log(process.env.NODE_ENV, '==== env ====')

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.BannerPlugin("Copyright Rose20.99.c@gmail.com"),
    new webpack.optimize.UglifyJsPlugin()
  ])
}
