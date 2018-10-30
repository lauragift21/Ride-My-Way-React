const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV;
const apiHost =
  env === "production"
    ? "'https://ride-my-way-server.herokuapp.com'"
    : "'http://localhost:3000'";

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true }
        }
      },
      {
        test: /\.scss|css$/,
        use: [
          "style-loader",
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000
            }
          }
        ]
      }
    ]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      filename: "./public/index.html"
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      __API__: apiHost
    })
  ]
};
