import React from 'react';
import PropTypes from 'prop-types';
import EmojiGroup from 'EmojiGroup';
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

	onSearchValueChange(searchValue) {
		this.setState({ searchValue });
	}

	render() {
		const { data } = this.props;
		const groups = [];

		Object.entries(data).forEach(([key, value]) => {
			if (key !== 'version') {
				groups.push(<EmojiGroup key={key} groupName={key} group={value} onClick={copyEmoji} />);
			}
		});

		return (
			<>
				<SearchField onChangeCallback={this.onSearchValueChange} />
				{groups}
				<div id="footer"><strong>{`Built with Unicode Emoji v${data.version}`}</strong></div>
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
