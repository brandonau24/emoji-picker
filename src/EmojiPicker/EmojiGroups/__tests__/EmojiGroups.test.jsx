import React from 'react';
import { render, screen } from '@testing-library/react';
import EmojiGroups from '../EmojiGroups';

test('creates emoji groups for top level groups', () => {
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

	render(<EmojiGroups data={data} onClickEmoji={jest.fn()} />);

	return screen.findAllByRole('heading', { level: 2 }).then((headings) => expect(headings.length).toBe(3));
});
