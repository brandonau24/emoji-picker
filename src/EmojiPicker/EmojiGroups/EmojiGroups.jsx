import React from 'react';
import PropTypes from 'prop-types';
import EmojiGroup from 'EmojiGroup';

const EmojiGroups = ({ data, onClickEmoji }) => {
	const emojiGroups = [];

	Object.entries(data).forEach(([key, value]) => {
		if (key !== 'version') {
			emojiGroups.push(
				<EmojiGroup
					key={key}
					groupName={key}
					group={value}
					onClick={onClickEmoji}
				/>
			);
		}
	});

	return emojiGroups;
};

EmojiGroups.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.objectOf(
			PropTypes.arrayOf(PropTypes.shape({
				name: PropTypes.string,
				codepoints: PropTypes.string
			}))
		),
		PropTypes.string
	])).isRequired,
	onClickEmoji: PropTypes.func.isRequired
};

export default EmojiGroups;
