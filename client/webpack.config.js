const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
  },
  module : {
    rules : [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader',
       ],
      },
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000
  }
};