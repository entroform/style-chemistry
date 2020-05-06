const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

const CopyPlugin = require('copy-webpack-plugin');
const WritePlugin = require('write-file-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    'partner': path.resolve(__dirname, 'source/partner.js'),
    'storefront': path.resolve(__dirname, 'source/storefront.js'),
  },

  output: {
    path: outputPath,
    filename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              removeComments: true,
              collapseWhitespace: false,
              attrs: [
                'img:src',
                'link:href',
              ],
            },
          },
        ],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'source'),
    },
    extensions: [
      '.js', '.jsx', '.json'
    ],
  },

  devtool: 'source-map',

  devServer: {
    contentBase: outputPath,
    hot: true,
    open: true,
    port: 8080,
    // quiet: true,
    // historyApiFallback: true,
  },

  plugins: [
    new HtmlPlugin({
      inject: true,
      chunks: ['partner'],
      filename: 'partner.html',
      template: path.resolve(__dirname, 'source/partner.html'),
    }),
    new HtmlPlugin({
      inject: true,
      chunks: ['storefront'],
      filename: 'storefront.html',
      template: path.resolve(__dirname, 'source/storefront.html'),
    }),
    new CopyPlugin([
      {
        context: 'source/static',
        from: '**/*',
        to: 'static',
      }
    ]),
    new WritePlugin(),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
