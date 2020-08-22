const path = require('path');

module.exports = {
	testRegex: '/__tests__/.+\.jsx?',
	moduleFileExtensions: ['js', 'jsx'],
	setupFiles: ['<rootDir>/enzyme.config.js'],
	coverageDirectory: '<rootDir>/coverage',
	rootDir: path.resolve(process.cwd())
};
