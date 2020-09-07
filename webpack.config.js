const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
			},
			{
				test: /\.s?css/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development'
						}
					},
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			EmojiPicker: path.resolve(srcPath, 'EmojiPicker/EmojiPicker.jsx'),
			EmojiGroup: path.resolve(srcPath, 'EmojiGroup/EmojiGroup.jsx'),
			Emoji: path.resolve(srcPath, 'Emoji/Emoji.jsx')
		},
		extensions: ['.js', '.jsx']
	},
	devServer: {
		port: 8080,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		})
	],
	devtool: 'source-map'
};
