import React from 'react';
import PropTypes from 'prop-types';
import EmojiGroup from 'EmojiGroup';
import SearchField from './SearchField';

const copyEmoji = (e) => {
	const fakeTextarea = document.createElement('textarea');
	document.body.appendChild(fakeTextarea);
	fakeTextarea.textContent = e.currentTarget.value;
	fakeTextarea.select();
	document.execCommand('copy');
	document.body.removeChild(fakeTextarea);
};

const EmojiPicker = ({ data }) => {
	const groups = [];

	Object.entries(data).forEach(([key, value]) => {
		if (key !== 'version') {
			groups.push(<EmojiGroup key={key} groupName={key} group={value} onClick={copyEmoji} />);
		}
	});

	return (
		<>
			<SearchField />
			{groups}
			<div id="footer">{`Built with Unicode Emoji v${data.version}`}</div>
		</>
	);
};

EmojiPicker.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	])).isRequired
};

export default EmojiPicker;
