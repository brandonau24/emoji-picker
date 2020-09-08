import React from 'react';
import PropTypes from 'prop-types';
import twemoji from 'twemoji';

import './Emoji.scss';

const Emoji = ({ codepoints, name, onClick }) => {
	const transformedCodepoints = twemoji.convert.fromCodePoint(codepoints);

	return <button type="button" className="emoji" title={name} alt={name} value={transformedCodepoints} onClick={onClick}>{transformedCodepoints}</button>;
};

Emoji.propTypes = {
	codepoints: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Emoji;
