const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
	entry: path.resolve(srcPath, 'index.jsx'),
	output: {
		filename: 'emoji-picker.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			EmojiPicker: path.resolve(srcPath, 'EmojiPicker.jsx'),
			EmojiGroup: path.resolve(srcPath, 'EmojiGroup.jsx'),
			Emoji: path.resolve(srcPath, 'Emoji.jsx')
		},
		extensions: ['.js', '.jsx']
	},
	devServer: {
		port: 8080,
		open: true
	},
	plugins: [new HtmlWebpackPlugin()],
	devtool: 'source-map'
};
