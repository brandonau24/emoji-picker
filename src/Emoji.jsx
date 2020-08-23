import React from 'react';
import PropTypes from 'prop-types';

const transformCodepoints = (codepoints) => {
	const transformedCodepoints = codepoints.split(' ').map((codepoint) => `0x${codepoint}`);

	return String.fromCodePoint(...transformedCodepoints);
};

const Emoji = ({ codepoints, name }) => {
	const transformedCodepoints = transformCodepoints(codepoints);

	return <div className="emoji" alt={name} value={transformedCodepoints}>{transformedCodepoints}</div>;
};

Emoji.propTypes = {
	codepoints: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default Emoji;
