import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'Emoji';

const EmojiGroup = ({ groupName, group }) => (
	<div className="emoji-group">
		<h4>{groupName}</h4>
		{
			Object.entries(group).map(([subgroup, emojis]) => emojis.map(
				(emoji) => <Emoji subgroup={subgroup} name={emoji.name} codepoints={emoji.codepoints} />
			))
		}
	</div>
);

EmojiGroup.propTypes = {
	groupName: PropTypes.string.isRequired,
	group: PropTypes.objectOf(PropTypes.array).isRequired
};

export default EmojiGroup;
