import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import twemoji from 'twemoji';
import EmojiPicker from 'EmojiPicker';

window.matchMedia = jest.fn().mockReturnValue({ matches: false });

const data = {
	version: '13.0',
	'group-1': {
		'subgroup-1': [
			{
				name: 'grinning face',
				codepoints: '1F600'
			}
		]
	},
	'group-2': {
		'subgroup-2': [
			{
				name: 'smiley face',
				codepoints: '1F600'
			}
		]
	},
	'group-3': {
		'subgroup-3': [
			{
				name: 'heart',
				codepoints: '1F600'
			}
		]
	}
};

test('emoji groups are rendered when search field is empty', () => {
	render(<EmojiPicker data={data} />);

	return screen.findAllByRole('heading', { level: 2 }).then((headings) => {
		expect(headings.length).toBe(3);
	});
});

test('renders emojis when search field is not empty ignoring casing', () => {
	render(<EmojiPicker data={data} />);

	const searchField = screen.getByRole('textbox');
	userEvent.type(searchField, 'fACe');

	return screen.findAllByRole('button').then((emojis) => {
		expect(emojis.length).toBe(2);
		expect(screen.queryByRole('heading')).not.toBeInTheDocument();

		emojis.forEach((emoji) => {
			expect(emoji).toHaveAttribute('title', expect.stringContaining('face'));
		});
	});
});

test('footer is rendered with Unicode version', () => {
	render(<EmojiPicker data={data} />);

	expect(screen.getByRole('contentinfo')).toHaveTextContent(/Unicode Emoji v13\.0/);
});

test('clicking emoji copies to clipboard', () => {
	const createElementSpy = jest.spyOn(document, 'createElement');
	const appendChildSpy = jest.spyOn(document.body, 'appendChild');
	const removeChildSpy = jest.spyOn(document.body, 'removeChild');
	const execCommandSpy = jest.spyOn(document, 'execCommand');

	render(<EmojiPicker data={data} />);

	const smileyFaceEmoji = screen.getByTitle('smiley face');
	userEvent.click(smileyFaceEmoji);

	expect(createElementSpy).toBeCalledWith('textarea');
	expect(appendChildSpy).toBeCalled();
	expect(removeChildSpy).toBeCalled();
	expect(execCommandSpy).toBeCalledWith('copy');
});

test('twemoji parses DOM on state updates', () => {
	render(<EmojiPicker data={data} />);

	const searchField = screen.getByRole('textbox');
	userEvent.type(searchField, 'face');
	userEvent.type(searchField, '{selectall}');
	userEvent.type(searchField, '{backspace}');

	expect(twemoji.parse).toBeCalled();
});
