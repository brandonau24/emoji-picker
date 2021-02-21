import React from 'react';
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

class EmojiPicker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		};

		this.onSearchValueChange = this.onSearchValueChange.bind(this);
	}

	componentDidUpdate() {
		twemoji.parse(document.querySelector('#emoji-picker'), {
			folder: 'svg',
			ext: '.svg',
			className: 'emoji-img'
		});
	}

	onSearchValueChange(searchValue) {
		this.setState({ searchValue });
	}

	render() {
		const { data } = this.props;
		const { searchValue } = this.state;
		const { version } = data;
		let emojiPickerBody;

		if (!searchValue) {
			emojiPickerBody = <EmojiGroups data={data} onClickEmoji={copyEmoji} />;
		} else {
			// eslint-disable-next-line max-len
			emojiPickerBody = <EmojisFiltered data={data} searchValue={searchValue} onClickEmoji={copyEmoji} />;
		}

		return (
			<>
				<Toolbar onSearchFieldChangeCallback={this.onSearchValueChange} />
				{emojiPickerBody}
				<div id="footer"><strong>{`Built with Unicode Emoji v${version}`}</strong></div>
			</>
		);
	}
}

EmojiPicker.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	])).isRequired
};

export default EmojiPicker;
