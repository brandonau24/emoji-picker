import React, { useState, useLayoutEffect } from 'react';
import twemoji from 'twemoji';

import Toolbar from 'Toolbar/Toolbar';
import EmojiGroups from './EmojiGroups/EmojiGroups';
import EmojisFiltered from './EmojisFiltered/EmojisFiltered';

import data from './emoji-data.json';

import './EmojiPicker.scss';

const copyEmoji = (e) => {
	const fakeTextarea = document.createElement('textarea');
	document.body.appendChild(fakeTextarea);
	fakeTextarea.textContent = e.currentTarget.value;
	fakeTextarea.select();
	document.execCommand('copy');
	document.body.removeChild(fakeTextarea);
};

const EmojiPicker = () => {
	const [searchValue, setSearchValue] = useState('');
	const { version } = data;
	let emojiPickerBody;

	if (!searchValue) {
		emojiPickerBody = <EmojiGroups data={data} onClickEmoji={copyEmoji} />;
	} else {
		emojiPickerBody = (
			<EmojisFiltered
				data={data}
				searchValue={searchValue}
				onClickEmoji={copyEmoji}
			/>
		);
	}

	useLayoutEffect(() => {
		twemoji.parse(document.querySelector('#emoji-picker'), {
			folder: 'svg',
			ext: '.svg',
			className: 'emoji-img'
		});
	});

	return (
		<div id="emoji-picker">
			<Toolbar onSearchFieldChangeCallback={setSearchValue} />
			{emojiPickerBody}
			<div role="contentinfo" id="footer"><strong>{`Built with Unicode Emoji v${version}`}</strong></div>
		</div>
	);
};

export default EmojiPicker;
