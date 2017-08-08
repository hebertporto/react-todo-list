const env = process.env.NODE_ENV
console.log('env', env);
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const VENDOR_LIBS = [
  'react', 'react-dom', 'redux', 'react-redux', 'prop-types', 'redux-thunk',
]

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        enforce: 'pre',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'dist'),
        ],
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-3'],
          },
        },
      },
      {
        test: /\.css$/,
        use: env === 'production'
          ? ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'sass-loader'],
            publicPath: '/dist',
          })
          : ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,
              name: 'assets/images/[hash]-[name].[ext]',
            },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true,
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
}
