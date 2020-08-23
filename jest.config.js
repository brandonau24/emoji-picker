const path = require('path');

module.exports = {
	testRegex: '/__tests__/.+\.jsx?',
	setupFiles: ['<rootDir>/enzyme.config.js'],
	coverageDirectory: '<rootDir>/coverage',
	rootDir: path.resolve(process.cwd()),
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		EmojiPicker$: '<rootDir>/src/EmojiPicker.jsx',
		EmojiGroup$: '<rootDir>/src/EmojiGroup.jsx',
		Emoji$: '<rootDir>/src/Emoji.jsx'
	}
};
