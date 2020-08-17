import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from 'EmojiPicker';

const root = document.createElement('div');
root.id = 'emoji-picker';

document.body.append(root);

ReactDOM.render(<EmojiPicker />, root);
