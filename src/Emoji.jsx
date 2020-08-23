import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ codepoints, name }) => <div className="emoji" alt={name}>{codepoints}</div>;

Emoji.propTypes = {
	codepoints: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default Emoji;
