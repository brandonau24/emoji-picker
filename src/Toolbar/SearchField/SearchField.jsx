import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'Icon';

import './SearchField.scss';

const SearchField = ({ onChangeCallback, searchValue }) => {
	const onSearchFieldChange = (event) => onChangeCallback(event.target.value);

	return (
		<div className="search-field">
			<Icon name="search" title="Search for an emoji" />
			<input type="text" value={searchValue} onChange={onSearchFieldChange} placeholder="Search for an emoji" />
		</div>
	);
};

SearchField.propTypes = {
	onChangeCallback: PropTypes.func.isRequired,
	searchValue: PropTypes.string.isRequired
};

export default SearchField;
