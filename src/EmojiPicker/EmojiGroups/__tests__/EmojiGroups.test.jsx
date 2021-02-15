import React from 'react';
import { shallow } from 'enzyme';
import EmojiGroup from 'EmojiGroup';
import EmojiGroups from '../EmojiGroups';

describe('EmojiGroups', () => {
	const data = {
		version: '13.0',
		'group-1': {
			'subgroup-1': [
				{
					name: 'grinning face',
					codepoints: 'codepoints'
				}
			]
		},
		'group-2': {
			'subgroup-2': [
				{
					name: 'smiley face',
					codepoints: 'codepoints'
				}
			]
		},
		'group-3': {
			'subgroup-3': [
				{
					name: 'heart',
					codepoints: 'codepoints'
				}
			]
		}
	};

	it('creates emoji groups for top level groups', () => {
		const subject = shallow(<EmojiGroups data={data} onClickEmoji={jest.fn()} />);

		expect(subject.find(EmojiGroup)).toHaveLength(3);
	});
});
