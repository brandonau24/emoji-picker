import React from 'react';
import PropTypes from 'prop-types';
import twemoji from 'twemoji';

import EmojiGroup from 'EmojiGroup';
import Emoji from 'Emoji';
import SearchField from './SearchField';

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
		const groups = [];
		const { version } = data;

		if (!searchValue) {
			Object.entries(data).forEach(([key, value]) => {
				if (key !== 'version') {
					// eslint-disable-next-line max-len
					groups.push(<EmojiGroup key={key} groupName={key} group={value} onClick={copyEmoji} />);
				}
			});
		} else {
			Object.keys(data).forEach((groupName) => {
				if (groupName !== 'version') {
					Object.values(data[groupName]).forEach((subgroup) => {
						subgroup.forEach((emoji) => {
							const { name, codepoints } = emoji;
							if (name.toLowerCase().includes(searchValue.toLowerCase())) {
								// eslint-disable-next-line max-len
								groups.push(<Emoji key={name} name={name} codepoints={codepoints} onClick={copyEmoji} />);
							}
						});
					});
				}
			});
		}

		return (
			<>
				<SearchField onChangeCallback={this.onSearchValueChange} />
				{groups}
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
