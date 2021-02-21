import React from 'react';
import PropTypes from 'prop-types';

import SearchField from 'Toolbar/SearchField/SearchField';

import './Toolbar.scss';

const Toolbar = ({ onSearchFieldChangeCallback }) => (
	<div className="toolbar">
		<SearchField onChangeCallback={onSearchFieldChangeCallback} />
	</div>
);

Toolbar.propTypes = {
	onSearchFieldChangeCallback: PropTypes.func.isRequired
};

export default Toolbar;
