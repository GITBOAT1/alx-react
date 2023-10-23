const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production
  entry: './js/dashboard_main.js', // Your entry JavaScript file
  output: {
    filename: 'bundle.js', // The output JavaScript file name
    path: path.resolve(__dirname, 'public'), // The output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
