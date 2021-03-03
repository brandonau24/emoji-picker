module.exports = {
	env: {
		browser: true,
		es2020: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:testing-library/react',
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
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.test.js?(x)', 'setupFile.js'] }]
	},
	settings: {
		'import/resolver': 'webpack'
	}
};
