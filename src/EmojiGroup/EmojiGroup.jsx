import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'Emoji';

import './EmojiGroup.scss';

const EmojiGroup = ({ groupName, group, onClick }) => (
	<div className="emoji-group">
		<h4 className="emoji-group-name">{groupName}</h4>
		{
			Object.values(group).map((emojis) => emojis.map(
				(emoji) => (
					<Emoji
						/* eslint-disable react/jsx-indent-props */
						// There's a bug where the linter wants the props to be indented with 2 spaces
						// and also wants it to be indented like below so it is in an error state forever
						key={emoji.codepoints}
						name={emoji.name}
						codepoints={emoji.codepoints}
						onClick={onClick}
						/* eslint-enable */
					/>
				)
			))
		}
	</div>
);

EmojiGroup.propTypes = {
	groupName: PropTypes.string.isRequired,
	group: PropTypes.objectOf(PropTypes.array).isRequired,
	onClick: PropTypes.func.isRequired
};

export default EmojiGroup;
