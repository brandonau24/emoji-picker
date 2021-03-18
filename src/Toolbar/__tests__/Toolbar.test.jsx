import React from 'react';
import { render, screen } from '@testing-library/react';

import Toolbar from '../Toolbar';

window.matchMedia = jest.fn().mockReturnValue({
	matches: false
});

test('renders a SearchField as a child of the toolbar', () => {
	const div = document.createElement('div');
	div.id = 'emoji-picker';

	render(<Toolbar onSearchFieldChangeCallback={jest.fn()} searchValue="" />, {
		container: document.body.appendChild(div)
	});

	return screen.findByRole('textbox').then((searchField) => expect(searchField).toBeVisible());
});

test('renders a ColorThemeSwitch as a child of the toolbar', () => {
	const div = document.createElement('div');
	div.id = 'emoji-picker';

	render(<Toolbar onSearchFieldChangeCallback={jest.fn()} searchValue="" />, {
		container: document.body.appendChild(div)
	});

	return screen.findByRole('checkbox').then((colorThemeSwitch) => expect(colorThemeSwitch).toBeVisible());
});
