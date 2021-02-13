import React from 'react';

class SearchField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({ searchValue: event.target.value });
	}

	render() {
		const { searchValue } = this.state;

		return <input type="text" value={searchValue} onChange={this.onChange} placeholder="Search for an emoji" />;
	}
}

export default SearchField;
