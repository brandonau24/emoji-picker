import React from 'react';
import { shallow } from 'enzyme';
import EmojiGroup from 'EmojiGroup';
import Emoji from 'Emoji';

describe('EmojiGroup', () => {
	it('renders header with group name', () => {
		const groupName = 'Group 1';
		const subject = shallow(<EmojiGroup groupName={groupName} group={{ subgroup: [] }} />);

		expect(subject.find('h4').text()).toBe(groupName);
	});

	it('renders emojis in a subgroup', () => {
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

		const subject = shallow(<EmojiGroup groupName="Group 1" group={group} />);
		const emojis = subject.find(Emoji);
		expect(emojis).toHaveLength(group.subgroup.length);
	});
});
