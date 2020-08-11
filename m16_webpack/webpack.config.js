// Webpack
// - Processa arquivos à partir de um único ponto de entrada
// - Vai navegando por cada arquivo do projeto pelos imports/exports e
//   detecta/processa cada arquivo conforme seu tipo/extensão pelos loaders
//   que o webpack possui

const MiniCssExtractPuglin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),  // Minifica CSS
      new UglifyJsPlugin({              // Minifica JS
        cache: true,
        parallel: true
      })                  
    ]
  },
  plugins: [
    new MiniCssExtractPuglin({
      filename: 'estilo.css'
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,              // Verifica formato do arquivo com Regex
      use: [
        MiniCssExtractPuglin.loader,    // Extrai arquivos CSS
        'css-loader',                   // Interpreta @import, url()...
        'sass-loader'
      ]
    },
    {
      test: /\.html$/,              // Verifica formato do arquivo com Regex
      use: [
        'css-loader',                   // Interpreta @import, url()...
        'sass-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  }
};