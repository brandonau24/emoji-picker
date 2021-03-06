import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'Emoji';

const EmojisFiltered = ({ data, searchValue, onClickEmoji }) => {
	const emojis = [];

	Object.keys(data).forEach((groupName) => {
		if (groupName !== 'version') {
			Object.values(data[groupName]).forEach((subgroup) => {
				subgroup.forEach((emoji) => {
					const { name, codepoints } = emoji;
					if (name.toLowerCase().includes(searchValue.toLowerCase())) {
						emojis.push(
							<Emoji
								key={name}
								name={name}
								codepoints={codepoints}
								onClick={onClickEmoji}
							/>
						);
					}
				});
			});
		}
	});

	return (
		<div style={{ padding: '1.5rem' }}>
			{emojis}
		</div>
	);
};

EmojisFiltered.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.objectOf(
			PropTypes.arrayOf(PropTypes.shape({
				name: PropTypes.string,
				codepoints: PropTypes.string
			}))
		),
		PropTypes.string
	])).isRequired,
	searchValue: PropTypes.string.isRequired,
	onClickEmoji: PropTypes.func.isRequired
};

export default EmojisFiltered;
