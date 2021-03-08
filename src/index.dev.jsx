import 'core-js/modules/es.object.entries';
import 'core-js/modules/es.object.values';
import 'core-js/modules/es.string.from-code-point';
import 'core-js/modules/es.string.includes';
import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from 'EmojiPicker';

if (module.hot) {
	module.hot.accept('EmojiPicker', () => {
		ReactDOM.render(<EmojiPicker />, document.body);
	});
}

ReactDOM.render(<EmojiPicker />, document.body);
