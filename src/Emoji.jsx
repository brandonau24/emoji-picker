import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ codepoints }) => <div className="emoji">{codepoints}</div>;

Emoji.propTypes = {
	codepoints: PropTypes.string.isRequired
};

export default Emoji;
