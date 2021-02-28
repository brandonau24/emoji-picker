import React from 'react';
import Icon from 'Icon';

import './ColorThemeSwitch.scss';

export function toggleTheme(useDarkTheme) {
	const emojiPickerClasses = document.querySelector('#emoji-picker').classList;

	if (useDarkTheme) {
		emojiPickerClasses.add('dark-theme');
	} else {
		emojiPickerClasses.add('light-theme');
	}
}

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

		toggleTheme(useDarkTheme);

		this.onToggle = this.onToggle.bind(this);
	}

	onToggle(event) {
		const useDarkTheme = event.target.checked;

		this.setState({ useDarkTheme });

		toggleTheme(useDarkTheme);

		window.localStorage.setItem('useDarkTheme', event.target.checked);
	}

	render() {
		const { useDarkTheme } = this.state;

		return (
			<div className="color-theme-switch__container">
				<Icon className="sun-icon" name="sun-o" />
				<input className="color-theme-switch__input" type="checkbox" checked={useDarkTheme} onChange={this.onToggle} />
				<Icon className="moon-icon" name="moon-o" />
			</div>
		);
	}
}

export default ColorThemeSwitch;
