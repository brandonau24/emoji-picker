import React from 'react';
import PropTypes from 'prop-types';

import 'styles/fonts/fontFace.css';

const Icon = ({ name, title }) => <i aria-hidden="true" className={`icon-${name}`} title={title} />;

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Icon;
