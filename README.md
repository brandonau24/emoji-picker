# emoji-picker
![emoji-picker build](https://github.com/brandonau24/emoji-picker/workflows/emoji-picker%20build/badge.svg)
![emoji-picker tests](https://github.com/brandonau24/emoji-picker/workflows/emoji-picker%20tests/badge.svg)
[![Coverage](https://coveralls.io/repos/github/brandonau24/emoji-picker/badge.svg?branch=master)](https://coveralls.io/github/brandonau24/emoji-picker?branch=master)

## Usage
Eventually, this will be able to be be added as a package through NPM or yarn.

## What is emoji-picker?
emoji-picker is a React component that enables the user to copy an emoji to their clipboard by clicking on it. This
component allows the user to search for emojis by name. The component does have a light and dark theme which can be toggled by the user.

![GIF of emoji-picker](./emoji-picker.gif)

The project uses [twemoji](https://github.com/twitter/twemoji) to render the emojis to keep the appearance consistent between platforms.

## Data prop format
You can use any set of emojis you want, but they have to be in the shape of the following:

```
	"Group name": {
		"subgroup-1": [
			{
				"name": emoji name,
				"codepoints: emoji codepoints
			}
		]

		// rest of subgroups...
	},

	// rest of groups...

```

See [the test data file](./src/emoji-data.json) for a complete set. Feel free to take it or use [emoji-data-file-parser](https://github.com/brandonau24/emoji-data-file-parser) to generate one for your own.