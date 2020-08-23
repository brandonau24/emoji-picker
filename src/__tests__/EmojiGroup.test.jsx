import React from 'react';
import { shallow } from 'enzyme';
import EmojiGroup from 'EmojiGroup';
import Emoji from 'Emoji';

describe('EmojiGroup', () => {
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

	let subject;

	beforeEach(() => {
		subject = shallow(<EmojiGroup groupName={groupName} group={group} />);
	});

	it('renders header with group name', () => {
		expect(subject.find('h4').text()).toBe(groupName);
	});

	it('renders emojis in a subgroup', () => {
		const emojis = subject.find(Emoji);
		expect(emojis).toHaveLength(group.subgroup.length);
	});
});
