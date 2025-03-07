const path = require('path'); //CommonJS

module.exports = {
    mode: 'production',
    entry: './src/main.js', // Ponto de entrada
    output: {
      path: path.resolve(__dirname, 'public', 'assets', 'js'), // Diretório de saída
      filename: 'bundle.js', // Arquivo de saída
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
            },
          },
        },
        {
          test: /\.scss$/, // Adicionando a regra para arquivos .scss
          use: [
            'style-loader',
            'css-loader', 
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devtool: 'source-map',
};
