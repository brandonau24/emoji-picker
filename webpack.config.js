const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, 'src');

const devMode = process.env.NODE_ENV === 'development';

const buildPlugins = [
	new MiniCssExtractPlugin({
		filename: 'styles.css'
	})
];

if (devMode) {
	buildPlugins.push(
		new HtmlWebpackPlugin({
			template: './template.html'
		})
	)
}

const libraryTarget = devMode ? undefined : 'commonjs2';
const entry = devMode ? path.resolve(srcPath, 'index.dev.jsx') : path.resolve(srcPath, 'index.jsx');

module.exports = {
	entry,
	output: {
		filename: 'emoji-picker.js',
		libraryTarget,
		clean: true
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
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['autoprefixer', 'postcss-preset-env', 'cssnano']
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[hash][ext][query]'
				}
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
	devtool: devMode ? 'source-map' : false,
	externals: {
		react: 'React'
	}
};
