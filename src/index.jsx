import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from 'EmojiPicker';
import data from './emoji-data.json';

const root = document.createElement('div');
root.id = 'emoji-picker';

document.body.append(root);

ReactDOM.render(<EmojiPicker data={data} />, root);
