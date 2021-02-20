import React from 'react';
import PropTypes from 'prop-types';

import './SearchField.scss';

class SearchField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		const { onChangeCallback } = this.props;
		const searchValue = event.target.value;

		this.setState({ searchValue });

		onChangeCallback(searchValue);
	}

	render() {
		const { searchValue } = this.state;

		return (
			<div className="search-field">
				<input type="text" value={searchValue} onChange={this.onChange} placeholder="Search for an emoji" />
			</div>
		);
	}
}

SearchField.propTypes = {
	onChangeCallback: PropTypes.func.isRequired
};

export default SearchField;
