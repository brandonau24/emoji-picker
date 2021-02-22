import React from 'react';

class ColorThemeSwitch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			useDarkTheme: false
		};

		this.onToggle = this.onToggle.bind(this);
	}

	onToggle(event) {
		this.setState({
			useDarkTheme: event.target.checked
		});
	}

	render() {
		const { useDarkTheme } = this.state;

		return (
			<input type="checkbox" checked={useDarkTheme} onChange={this.onToggle} />
		);
	}
}

export default ColorThemeSwitch;
