import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorThemeSwitch, { toggleTheme } from '../ColorThemeSwitch';

const mockMatchMedia = (matches) => {
	window.matchMedia = jest.fn().mockReturnValue({ matches });
};

const mockLocalStorage = (getItemVal) => jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => getItemVal);

const createEmojiPickerDiv = () => {
	const div = document.createElement('div');
	div.id = 'emoji-picker';

	return div;
};

test('render sun icon', () => {
	mockMatchMedia(false);
	mockLocalStorage(null);

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	expect(screen.getByTitle('Light Theme')).toBeVisible();
});

test('render moon icon', () => {
	mockMatchMedia(false);
	mockLocalStorage(null);

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	expect(screen.getByTitle('Dark Theme')).toBeVisible();
});

test('toggle should be on when toggle is off and clicked', () => {
	mockMatchMedia(false);
	mockLocalStorage(null);

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	const checkbox = screen.getByRole('checkbox');
	userEvent.click(checkbox);

	expect(checkbox).toBeChecked();
});

test('toggle should be off when toggle is on and clicked', () => {
	mockMatchMedia(true);
	mockLocalStorage(null);

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	const checkbox = screen.getByRole('checkbox');
	userEvent.click(checkbox);

	expect(checkbox).not.toBeChecked();
});

test('toggle should be on when user OS theme is dark', () => {
	mockMatchMedia(true);
	mockLocalStorage(null);

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	expect(screen.getByRole('checkbox')).toBeChecked();
});

test('toggle should be off when user OS theme is light', () => {
	mockMatchMedia(false);
	mockLocalStorage(null);

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	expect(screen.getByRole('checkbox')).not.toBeChecked();
});

test('toggle sets user theme preference to dark theme when toggle is off and clicked', () => {
	mockMatchMedia(false);
	mockLocalStorage(null);

	const { rerender } = render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	const checkbox = screen.getByRole('checkbox');
	userEvent.click(checkbox);

	rerender(<ColorThemeSwitch />);

	expect(checkbox).toBeChecked();
});

test('toggle sets user theme preference to light theme when toggle is on and clicked', () => {
	mockMatchMedia(true);
	mockLocalStorage(null);

	const { rerender } = render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	const checkbox = screen.getByRole('checkbox');
	userEvent.click(checkbox);

	rerender(<ColorThemeSwitch />);

	expect(checkbox).not.toBeChecked();
});

test('user dark theme preference is prioritized over OS theme', () => {
	mockMatchMedia(false);
	mockLocalStorage('true');

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	expect(screen.getByRole('checkbox')).toBeChecked();
});

test('user light theme preference is prioritized over OS theme', () => {
	mockMatchMedia(true);
	mockLocalStorage('false');

	render(<ColorThemeSwitch />, {
		container: document.body.appendChild(createEmojiPickerDiv())
	});

	expect(screen.getByRole('checkbox')).not.toBeChecked();
});

test('dark theme class is added to emoji-picker element', () => {
	const dataTestId = 'emoji-picker';

	render(<div data-testid={dataTestId} id="emoji-picker" />);

	toggleTheme(true);

	const emojiPicker = screen.getByTestId(dataTestId);

	expect(emojiPicker).toHaveClass('dark-theme');
	expect(emojiPicker).not.toHaveClass('light-theme');
});

test('light theme class is added to emoji-picker element', () => {
	const dataTestId = 'emoji-picker';

	render(<div data-testid={dataTestId} id="emoji-picker" />);

	toggleTheme(false);

	const emojiPicker = screen.getByTestId(dataTestId);

	expect(emojiPicker).toHaveClass('light-theme');
	expect(emojiPicker).not.toHaveClass('dark-theme');
});
