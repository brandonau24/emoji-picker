const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(process.cwd(), 'src');

module.exports = {
	entry: path.resolve(srcPath, 'index.js'),
	output: {
		filename: 'emoji-picker.js'
	},
	devServer: {
		port: 8080,
		open: true
	},
	plugins: [new HtmlWebpackPlugin()]
};