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
{ test: /\.css$/, use: ['style-loader',"css-loader"]},
{ test: /\.(mp3|wav)$/, use: ['file-loader'] },
{
    test: /\.js$/,
    exclude: /mode_modules/,
    use: {
        loader: "babel-loader",
    },
},
{

    test: /\.(scss|css)$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        "sass-loader",
    ],
}
],


},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
}),
new MiniCssExtractPlugin(),
],
devServer: {
static: './dist',
port: 8080,
hot: true,
open: true,
},
mode: 'development', // or 'production' include minimization
}
