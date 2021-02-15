import React from 'react';
import { shallow } from 'enzyme';
import Emoji from 'Emoji';
import EmojisFiltered from '../EmojisFiltered';

describe('EmojisFiltered', () => {
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

	it('renders emojis that include the search value (case insensitive)', () => {
		const subject = shallow(<EmojisFiltered data={data} searchValue="face" onClickEmoji={jest.fn()} />);

		expect(subject.find(Emoji)).toHaveLength(2);
	});
});
