import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'Icon';

import './SearchField.scss';

const SearchField = ({ onChangeCallback }) => {
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		onChangeCallback(searchValue);
	});

	return (
		<div className="search-field">
			<Icon name="search" />
			<input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Search for an emoji" />
		</div>
	);
};

SearchField.propTypes = {
	onChangeCallback: PropTypes.func.isRequired
};

export default SearchField;
