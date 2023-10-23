const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
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
  }
};
