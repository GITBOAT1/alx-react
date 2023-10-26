const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // The entry point for your JavaScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map', // Generate source maps for debugging
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader', // Copies images to the dist folder
          },
          {
            loader: 'image-webpack-loader', // Optimize images
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist', // Serve files from the dist directory
    hot: true, // Enable hot module replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Use this HTML template
    }),
  ],
};
