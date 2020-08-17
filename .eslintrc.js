module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'comma-dangle': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		'no-tabs': 'off',
		'react/jsx-indent': ['error', 'tab']
	},
	settings: {
		'import/resolver': 'webpack'
	}
};
