import React from 'react';
import Icon from 'Icon';
import Toggle from 'Toggle';

import './ColorThemeSwitch.scss';

export function toggleTheme(useDarkTheme) {
	const emojiPickerClasses = document.querySelector('#emoji-picker').classList;

	if (useDarkTheme) {
		emojiPickerClasses.add('dark-theme');
		emojiPickerClasses.remove('light-theme');
	} else {
		emojiPickerClasses.add('light-theme');
		emojiPickerClasses.remove('dark-theme');
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
				<Icon data-test="sun-icon" name="sun" />
				<Toggle id="color-theme-switch__Toggle" checked={useDarkTheme} onChange={this.onToggle} />
				<Icon data-test="moon-icon" name="moon" />
			</div>
		);
	}
}

export default ColorThemeSwitch;
