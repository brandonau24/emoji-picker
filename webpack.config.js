const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');

const devMode = process.env.NODE_ENV === 'development';

const buildPlugins = [
	new MiniCssExtractPlugin({
		filename: devMode ? 'styles.[hash].css' : 'styles.[contenthash].css'
	}),
	new CleanWebpackPlugin()
];

const postcssPlugins = ['autoprefixer', 'postcss-preset-env'];

if (devMode) {
	buildPlugins.push(
		new HtmlWebpackPlugin({
			template: './template.html'
		})
	)

	postcssPlugins.push('cssnano');
}

module.exports = {
	entry: devMode ? path.resolve(srcPath, 'index.dev.jsx') : path.resolve(srcPath, 'index.jsx'),
	output: {
		filename: devMode ? 'emoji-picker.[hash].js' : 'emoji-picker.[contenthash].js'
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
							hmr: devMode
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: postcssPlugins
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets'
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			EmojiPicker: path.resolve(srcPath, 'EmojiPicker/EmojiPicker.jsx'),
			EmojiGroup: path.resolve(srcPath, 'EmojiGroup/EmojiGroup.jsx'),
			Emoji: path.resolve(srcPath, 'Emoji/Emoji.jsx'),
			Icon: path.resolve(srcPath, 'Icon/Icon.jsx'),
			Toggle: path.resolve(srcPath, 'Toggle/Toggle.jsx'),
			Toolbar: path.resolve(srcPath, 'Toolbar'),
			styles: path.resolve(srcPath, 'styles')
		},
		extensions: ['.js', '.jsx']
	},
	devServer: {
		port: 8080,
		open: true
	},
	plugins: buildPlugins,
	devtool: devMode ? 'source-map' : 'none',
	externals: {
		twemoji: 'twemoji'
	}
};
