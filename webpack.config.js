var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client-side/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  mode: 'none',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
      {
        test:/\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/client-side'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
      }
    ]
  },
    devServer: {
      open: true,
      proxy: {
        '/api':  {
          target: "http://localhost:8081",
          secure: false
        }
      }
    }
};
