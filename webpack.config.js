const webpack = require("webpack");

const CopyPlugin = require("copy-webpack-plugin");
const AppPath = __dirname + "/app/";
const DistPath = __dirname + "/build/";

module.exports = {
  mode: "production",
  //mode: "development",
  entry: {
    inject: __dirname + "/app/inject/inject.js",
    background: __dirname + "/app/background/background.js",
    option: __dirname + "/app/option/option.js"
  },
  output: {
    path: __dirname + "/app/dist",
    filename: "[name].entry.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|svg|gif)(\?.*$|$)/,
        loader: "url-loader?importLoaders=1&limit=100000"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new webpack.BannerPlugin("Copyright banther@pm.me"),
    new CopyPlugin([{ from: AppPath + "manifest.json", to: DistPath }]),
    new CopyPlugin([
      {
        from: AppPath + "dist/*.entry.js",
        to: DistPath + "dist/",
        flatten: true
      }
    ]),
    new CopyPlugin([
      {
        from: AppPath + "assets",
        to: DistPath + "assets"
      }
    ]),
    new CopyPlugin([
      {
        from: AppPath + "option/index.html",
        to: DistPath + "option/index.html"
      }
    ]),

  ]
};
