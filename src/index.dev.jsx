import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from 'EmojiPicker';
import data from './emoji-data.json';

const root = document.querySelector('#container');

ReactDOM.render(<EmojiPicker data={data} />, root);
