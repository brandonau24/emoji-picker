import React from 'react';
import EmojiGroup from 'EmojiGroup';

class EmojiPicker extends React.Component {
	render() {
		// eslint-disable-next-line react/prop-types
		const { data } = this.props;

		const groups = [];

		Object.entries(data).forEach(([key, value]) => {
			groups.push(<EmojiGroup groupName={key} group={value} />);
		});

		return groups;
	}
}

export default EmojiPicker;
