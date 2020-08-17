const path = require('path');

module.exports = {
	testMatch: ['**/__tests__/**/*.jsx?'],
	moduleFileExtensions: ['js', 'jsx'],
	setupFiles: ['<rootDir>/config/enzyme.config.js'],
	coverageDirectory: '<rootDir>/coverage',
	rootDir: path.resolve(process.cwd())
};