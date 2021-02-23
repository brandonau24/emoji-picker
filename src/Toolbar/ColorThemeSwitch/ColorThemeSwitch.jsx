import React from 'react';
import Icon from 'Icon';

class ColorThemeSwitch extends React.Component {
	constructor(props) {
		super(props);

		let useDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const storageValue = JSON.parse(window.localStorage.getItem('useDarkTheme'));
		if (storageValue !== null) {
			useDarkTheme = storageValue;
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
			<div className="color-theme-switch-container">
				<Icon className="sun-icon" name="sun-o" />
				<input id="color-theme-switch" type="checkbox" checked={useDarkTheme} onChange={this.onToggle} />
				<Icon className="moon-icon" name="moon-o" />
			</div>
		);
	}
}

export default ColorThemeSwitch;
