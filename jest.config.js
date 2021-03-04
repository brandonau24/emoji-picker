const path = require('path');

module.exports = {
	testRegex: '/__tests__/.+\.jsx?',
	setupFilesAfterEnv: ['<rootDir>/setupFile.js'],
	coverageDirectory: '<rootDir>/coverage',
	rootDir: path.resolve(process.cwd()),
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		EmojiPicker$: '<rootDir>/src/EmojiPicker/EmojiPicker.jsx',
		EmojiGroup$: '<rootDir>/src/EmojiGroup/EmojiGroup.jsx',
		Emoji$: '<rootDir>/src/Emoji/Emoji.jsx',
		Icon$: '<rootDir>/src/Icon/Icon.jsx',
		Toggle$: '<rootDir>/src/Toggle/Toggle.jsx',
		"Toolbar/(.*)": '<rootDir>/src/Toolbar/$1',
		"\\.s?css$": 'identity-obj-proxy',
		twemoji$: '<rootDir>/src/mocks/twemoji.js'
	}
};
