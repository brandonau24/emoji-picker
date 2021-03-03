import React, { useState, useLayoutEffect } from 'react';
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

const ColorThemeSwitch = () => {
	let userThemePref = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const storageValue = JSON.parse(window.localStorage.getItem('useDarkTheme'));

	if (storageValue !== null) {
		userThemePref = storageValue;
	}

	const [useDarkTheme, setUseDarkTheme] = useState(userThemePref);

	useLayoutEffect(() => {
		toggleTheme(useDarkTheme);
		window.localStorage.setItem('useDarkTheme', useDarkTheme);
	});

	const onToggleChange = (event) => setUseDarkTheme(event.target.checked);

	return (
		<div className="color-theme-switch__container">
			<Icon name="sun" title="Light Theme" />
			<Toggle id="color-theme-switch__Toggle" checked={useDarkTheme} onChange={onToggleChange} />
			<Icon name="moon" title="Dark Theme" />
		</div>
	);
};

export default ColorThemeSwitch;
