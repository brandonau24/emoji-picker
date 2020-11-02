import React from 'react';
import ReactDOM from 'react-dom';
import twemoji from 'twemoji';
import EmojiPicker from 'EmojiPicker';
import data from './emoji-data.json';

const root = document.querySelector('#emoji-picker');

ReactDOM.render(<EmojiPicker data={data} />, root);

twemoji.parse(root, {
	folder: 'svg',
	ext: '.svg',
	className: 'emoji-img'
});
