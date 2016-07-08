"use strict";

var path = require("path");
var RISLoaderPath = path.resolve(__dirname, "../../index.js");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "..", "tmp"),
    filename: "bundle.js",
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: RISLoaderPath
      }
    ]
  }
};
