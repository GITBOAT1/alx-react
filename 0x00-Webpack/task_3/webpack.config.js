const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    header: './src/modules/header/header.js',
    body: './src/modules/body/body.js',
    footer: './src/modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    port: 8564,
    open: true,
  },
  module: {
    rules: [
      { 
      test: /\.css$/, 
      use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](jquery|lodash)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  
};
