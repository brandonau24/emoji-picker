import React from 'react';
import { render, screen } from '@testing-library/react';
import EmojisFiltered from '../EmojisFiltered';

test('renders emojis where the name includes search value ignoring case', () => {
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

	render(<EmojisFiltered data={data} onClickEmoji={jest.fn()} searchValue="FACE" />);

	return screen.findAllByRole('button').then((emojis) => {
		expect(emojis.length).toBe(2);
		expect(screen.queryByRole('heading')).not.toBeInTheDocument();

		emojis.forEach((emoji) => {
			expect(emoji).toHaveAttribute('title', expect.stringContaining('face'));
		});
	});
});
