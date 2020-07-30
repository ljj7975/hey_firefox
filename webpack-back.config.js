const path = require("path");

module.exports = {
  optimization: {
    minimize: false
  },
  entry: path.resolve("./app.js"),
  target: "node",
  output: {
    filename: "app.js",
    path: path.resolve("./dist/backend/")
  }
}
