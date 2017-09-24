require("webpack");

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"]},
            {test: /\.sol/, loader: 'truffle-solidity-loader'}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
         { from: './src/index.html', to: "index.html" }
        ]),
        new ExtractTextPlugin("app.css")
    ],
    devServer: {
        stats: 'errors-only'
    }
};
