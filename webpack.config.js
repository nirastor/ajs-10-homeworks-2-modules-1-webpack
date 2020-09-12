const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/, // маска для имени файла
        use: 'raw-loader' // какой загрузчик использовать
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  plugins:[
    new HtmlWebPackPlugin({template:"./src/index.html",filename:"./index.html"}),
    new MiniCssExtractPlugin({filename: '[name].css'})
  ]
}; 