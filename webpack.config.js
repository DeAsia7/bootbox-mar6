const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
path: path.resolve(__dirname,
'dist'),
clean: true,
},
module: {
rules: [
{ test: /\.css$/, use: ['style-loader',
{ test: /\.(mp3|wav)$/, use: ['file-loader'] },
'css-loader'] },
{
    test: /\.js$/,
    exclude: /mode_modules/,
    use: {
        loader: "babel-loader",
    },
},
],
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
}),
],
devServer: {
static: './dist',
port: 8080,
hot: true,
open: true,
},
mode: 'development', // or 'production' include minimization
}