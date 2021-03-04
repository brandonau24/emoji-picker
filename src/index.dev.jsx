import 'core-js/modules/es.object.entries';
import 'core-js/modules/es.object.values';
import 'core-js/modules/es.string.from-code-point';
import 'core-js/modules/es.string.includes';
import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from 'EmojiPicker';
import data from './emoji-data.json';

const root = document.querySelector('#container');

ReactDOM.render(<EmojiPicker data={data} />, root);
