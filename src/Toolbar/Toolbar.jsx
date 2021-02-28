import React from 'react';
import PropTypes from 'prop-types';

import SearchField from 'Toolbar/SearchField/SearchField';
import ColorThemeSwitch from 'Toolbar/ColorThemeSwitch/ColorThemeSwitch';

import './styles/Toolbar.scss';

const Toolbar = ({ onSearchFieldChangeCallback }) => (
	<div className="toolbar">
		<SearchField onChangeCallback={onSearchFieldChangeCallback} />
		<ColorThemeSwitch />
	</div>
);

Toolbar.propTypes = {
	onSearchFieldChangeCallback: PropTypes.func.isRequired
};

export default Toolbar;
