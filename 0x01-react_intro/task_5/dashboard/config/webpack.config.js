const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    open: 'index.html'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  plugins: [
    //new CleanWebpackPlugin(), // when runing, cannot access the dist dir
    new HtmlWebpackPlugin({
      title: 'hot reload',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  devtool: 'inline-source-map',
};