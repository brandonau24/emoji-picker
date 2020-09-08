const path = require('path');

module.exports = {
	testRegex: '/__tests__/.+\.jsx?',
	setupFiles: ['<rootDir>/enzyme.config.js', '<rootDir>/setupFile.js'],
	coverageDirectory: '<rootDir>/coverage',
	rootDir: path.resolve(process.cwd()),
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		EmojiPicker$: '<rootDir>/src/EmojiPicker/EmojiPicker.jsx',
		EmojiGroup$: '<rootDir>/src/EmojiGroup/EmojiGroup.jsx',
		Emoji$: '<rootDir>/src/Emoji/Emoji.jsx',
		"\\.s?css$": 'identity-obj-proxy'
	}
};
