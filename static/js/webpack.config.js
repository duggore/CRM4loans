var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: './menu.jsx',
  output: {
    // Output the bundled file.
    path: './',
    // Use the name specified in the entry key as name for the bundle file.
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        // Test for js or jsx files.
        test: /\.jsx?$/,
        
        exclude: /node_modules/,
        loader: 'babel',
      	query: {
       	 presets: ['es2015', 'stage-0', 'react']
      	}
      }
    ]
  },
  watch: true
  
  
};