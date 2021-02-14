import React from 'react';
import PropTypes from 'prop-types';

import './Emoji.scss';

const transformCodepoints = (codepoints) => {
	const transformedCodepoints = codepoints.split(' ').map((codepoint) => `0x${codepoint}`);

	return String.fromCodePoint(...transformedCodepoints);
};

const Emoji = ({
	codepoints, name, onClick, searchValue
}) => {
	const transformedCodepoints = transformCodepoints(codepoints);

	return name.toLowerCase().includes(searchValue.toLowerCase())
		&& <button type="button" className="emoji" title={name} alt={name} value={transformedCodepoints} onClick={onClick}>{transformedCodepoints}</button>;
};

Emoji.propTypes = {
	codepoints: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	searchValue: PropTypes.string
};

Emoji.defaultProps = {
	searchValue: ''
};

export default Emoji;
