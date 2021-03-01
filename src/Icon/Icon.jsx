import React from 'react';
import PropTypes from 'prop-types';

import 'styles/fonts/fontFace.css';

const Icon = ({ name }) => <i className={`icon-${name}`} />;

Icon.propTypes = {
	name: PropTypes.string.isRequired
};

export default Icon;
