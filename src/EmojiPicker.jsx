import React from 'react';
import PropTypes from 'prop-types';
import EmojiGroup from 'EmojiGroup';

const EmojiPicker = ({ data }) => {
	const groups = [];

	Object.entries(data).forEach(([key, value]) => {
		if (key !== 'version') {
			groups.push(<EmojiGroup key={key} groupName={key} group={value} />);
		}
	});

	return (
		<>
			{groups}
			<div id="footer">{`Built with Unicode Emoji v${data.version}`}</div>
		</>
	);
};

EmojiPicker.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.object.isRequired
};

export default EmojiPicker;
