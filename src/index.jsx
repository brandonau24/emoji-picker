import React from 'react';
import ReactDOM from 'react-dom';
import twemoji from 'twemoji';
import EmojiPicker from 'EmojiPicker';
import data from './emoji-data.json';

const root = document.createElement('div');
root.id = 'emoji-picker';

document.body.append(root);

ReactDOM.render(<EmojiPicker data={data} />, root);

twemoji.parse(root, {
	ext: '.svg',
	folder: 'svg',
	className: 'emoji-img'
});
