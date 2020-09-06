import React from 'react';
import PropTypes from 'prop-types';
import EmojiGroup from 'EmojiGroup';

class EmojiPicker extends React.Component {
	static copyEmoji() {
		console.log('copyEmoji');
	}

	componentDidMount() {
		document.addEventListener('click', EmojiPicker.copyEmoji);
	}

	componentWillUnmount() {
		document.removeEventListener('click', EmojiPicker.copyEmoji);
	}

	render() {
		const { data } = this.props;
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
	}
}

EmojiPicker.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	])).isRequired
};

export default EmojiPicker;
