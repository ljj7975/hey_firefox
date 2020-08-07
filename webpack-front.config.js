const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    baseController: "./src/controller/baseController.js"
  },
  output: {
    // filename: "[name].[contentHash].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/frontend/")
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          // "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Turns sass into css
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/view/honkling.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
