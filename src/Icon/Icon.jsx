import React from 'react';
import PropTypes from 'prop-types';

import 'styles/fonts/font-awesome-font-face.css';

const Icon = ({ name }) => <i className={`icon-${name}`} />;

Icon.propTypes = {
	name: PropTypes.string.isRequired
};

export default Icon;
