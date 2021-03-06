import React from 'react';
import PropTypes from 'prop-types';

import './styles/Emoji.scss';

const transformCodepoints = (codepoints) => {
	const transformedCodepoints = codepoints.split(' ').map((codepoint) => `0x${codepoint}`);

	return String.fromCodePoint(...transformedCodepoints);
};

const Emoji = ({ codepoints, name, onClick }) => {
	const transformedCodepoints = transformCodepoints(codepoints);

	return <button type="button" className="emoji" title={name} value={transformedCodepoints} onClick={onClick}>{transformedCodepoints}</button>;
};

Emoji.propTypes = {
	codepoints: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Emoji;
