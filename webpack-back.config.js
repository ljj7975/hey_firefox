const path = require("path");

module.exports = {
  entry: path.resolve("./app.js"),
  target: "node",
  output: {
    filename: "app.js",
    path: path.resolve("./node_dist/")
  }
}
