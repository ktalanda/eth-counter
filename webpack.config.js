require("webpack");

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.sol/, loader: 'truffle-solidity-loader'}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
         { from: './app/index.html', to: "index.html" }
        ]),
        new ExtractTextPlugin("app.css")
    ],
    devServer: {
        stats: 'errors-only'
    }
};
