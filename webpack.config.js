
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const port = process.env.PORT || 3000;

module.exports = {
    module: { 
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(?:le|c)ss$/,
          exclude: /node_modules/,
          use: ['style-loader','css-loader','less-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         favicon: './logo.png'
      })
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true
    },
    output: {
      path: path.resolve(__dirname, "./src"),
      filename: "bundle.js",
    },
    entry:'./src/index.js',
  };