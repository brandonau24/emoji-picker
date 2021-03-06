import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'Emoji';

import './EmojiGroup.scss';

const EmojiGroup = ({ groupName, group, onClick }) => (
	<div className="emoji-group">
		<h2 className="emoji-group-name">{groupName}</h2>
		{
			Object.values(group).map((emojis) => emojis.map(
				(emoji) => (
					<Emoji
						key={emoji.codepoints}
						name={emoji.name}
						codepoints={emoji.codepoints}
						onClick={onClick}
					/>
				)
			))
		}
	</div>
);

EmojiGroup.propTypes = {
	groupName: PropTypes.string.isRequired,
	group: PropTypes.objectOf(
		PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			codepoints: PropTypes.string
		}))
	).isRequired,
	onClick: PropTypes.func.isRequired
};

export default EmojiGroup;
