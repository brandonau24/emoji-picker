import React from 'react';
import { render, screen } from '@testing-library/react';
import EmojiGroup from 'EmojiGroup';

const groupName = 'Group 1';
const group = {
	subgroup: [
		{
			name: 'emoji1',
			codepoints: '111'
		},
		{
			name: 'emoji',
			codepoints: '222'
		},
		{
			name: 'emoji',
			codepoints: '333'
		}
	]
};
const onClick = jest.fn();

test('renders header with group name', () => {
	render(<EmojiGroup groupName={groupName} group={group} onClick={onClick} />);

	expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(new RegExp(`^${groupName}$`));
});

test('renders emojis in a subgroup', () => {
	render(<EmojiGroup groupName={groupName} group={group} onClick={onClick} />);

	screen.findAllByRole('button').then((emojis) => {
		expect(emojis.length).toBe(group.subgroup.length);
	});
});
