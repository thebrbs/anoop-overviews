const path = require('path');
const webpack = require('webpack');
const src_dir = path.join(__dirname, '/client/src');
const dist_dir = path.join(__dirname, '/public/dist');

module.exports = {
  mode: 'development',
  entry: [
    `${src_dir}/index.jsx`,
  ],
  output: {
    filename: 'bundle.js',
    path: dist_dir,
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : src_dir,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader' ],
      },
      {
        test: /\.scss$/,
        include: src_dir,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // compiles Sass to CSS
        ],
      },
    ],
  },
};
