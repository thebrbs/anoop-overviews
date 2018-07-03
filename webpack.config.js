const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const src_dir = path.join(__dirname, '/client/src');
const dist_dir = path.join(__dirname, '/public/dist');

const common = {
  context: __dirname + '/client',
};

const localmicro = {
  entry: `${src_dir}/index.jsx`,
  module : {
    rules : [
      {
        test : [/\.jsx?/],
        include : src_dir,
        loader : "babel-loader",
        query: {
          presets: ['react', 'es2015', 'env'],
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
            }
          }
        ]
      }
    ]
  },
  output: {
    path: dist_dir,
    filename: 'overview-bundle-localmicro.js'
  }
};

const client = {
  entry: `${src_dir}/client.jsx`,
  module : {
    rules : [
      {
        test : [/\.jsx?/],
        include : src_dir,
        loader : "babel-loader",
        query: {
          presets: ['react', 'es2015', 'env'],
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
            }
          }
        ]
      }
    ]
  },
  output: {
    path: dist_dir,
    filename: 'overview-bundle.js'
  }
};

const server = {
  entry: `${src_dir}/components/Overview.jsx`,
  target: 'node',
  module : {
    rules : [
      {
        test : [/\.jsx?/],
        include : src_dir,
        loader : "babel-loader",
        query: {
          presets: ['react', 'es2015', 'env'],
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
            }
          }
        ]
      }
    ]
  },
  output: {
    path: dist_dir,
    filename: 'overview-bundle-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, localmicro),
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];
