const path = require("path");

// 2
module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
  },
};
