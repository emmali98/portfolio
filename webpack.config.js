const path = require('path')

module.exports = {
  entry: path.resolve('.', 'client', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'portfolio.bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components']
          }
        }
      }
    ]
  }
}
