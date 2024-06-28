const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hover Navigation',
      template: './src/template.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/fonts/', to: 'fonts/' }, // Copies all fonts preserving their names
      ],
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        // Rule for SCSS files
        test: /\.scss$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader', // Turns CSS into commonjs
          'sass-loader', // Turns SCSS into CSS
        ],
      },
      {
        // Rule for CSS files
        test: /\.css$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader', // Turns CSS into commonjs
        ],
      },
      {
        // Rule for image files
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        // New rule for font files
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // Preserves original filename and directory structure
        },
      },
    ],
  },
};
