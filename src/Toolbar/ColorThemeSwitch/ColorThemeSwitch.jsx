import React from 'react';

class ColorThemeSwitch extends React.Component {
	constructor(props) {
		super(props);

		let useDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const storageValue = window.localStorage.getItem('useDarkTheme');
		if (storageValue !== null) {
			useDarkTheme = !!storageValue;
		}

		this.state = {
			useDarkTheme
		};

		this.onToggle = this.onToggle.bind(this);
	}

	onToggle(event) {
		this.setState({
			useDarkTheme: event.target.checked
		});

		window.localStorage.setItem('useDarkTheme', event.target.checked);
	}

	render() {
		const { useDarkTheme } = this.state;

		return (
			<input type="checkbox" checked={useDarkTheme} onChange={this.onToggle} />
		);
	}
}

export default ColorThemeSwitch;
