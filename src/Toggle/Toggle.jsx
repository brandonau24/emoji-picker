import React from 'react';
import PropTypes from 'prop-types';

import './Toggle.scss';

// Taken from https://www.w3schools.com/howto/howto_css_switch.asp
const Toggle = ({ onChange, id, checked, }) => (
	<label className="switch" htmlFor={id}>
		<input id={id} type="checkbox" checked={checked} onChange={onChange} />
		<span className="slider round" />
	</label>
);

Toggle.propTypes = {
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool
};

Toggle.defaultProps = {
	checked: false
};

export default Toggle;
