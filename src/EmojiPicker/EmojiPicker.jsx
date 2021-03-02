import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import twemoji from 'twemoji';

import Toolbar from 'Toolbar/Toolbar';
import EmojiGroups from './EmojiGroups/EmojiGroups';
import EmojisFiltered from './EmojisFiltered/EmojisFiltered';

import './EmojiPicker.scss';

const copyEmoji = (e) => {
	const fakeTextarea = document.createElement('textarea');
	document.body.appendChild(fakeTextarea);
	fakeTextarea.textContent = e.currentTarget.value;
	fakeTextarea.select();
	document.execCommand('copy');
	document.body.removeChild(fakeTextarea);
};

const EmojiPicker = ({ data }) => {
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

	useEffect(() => {
		twemoji.parse(document.querySelector('#emoji-picker'), {
			folder: 'svg',
			ext: '.svg',
			className: 'emoji-img'
		});
	});

	return (
		<>
			<Toolbar onSearchFieldChangeCallback={setSearchValue} />
			{emojiPickerBody}
			<div id="footer"><strong>{`Built with Unicode Emoji v${version}`}</strong></div>
		</>
	);
};

EmojiPicker.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	])).isRequired
};

export default EmojiPicker;
