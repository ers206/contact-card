const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
// this was in 19.4.4 it just said that the updated webpack file shwould have this/ i didnt have that 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
          title: 'Webpack Plugin',
        }),
        // not sure if this is in the right place 
        new WorkboxPlugin.GenerateSW()
      ],
    // line below not in 19.2.3 when it says to review code 
    // mode: "development", 
    module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        }
        ]
      }
};