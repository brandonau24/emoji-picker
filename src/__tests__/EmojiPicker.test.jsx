import React from 'react';
import { shallow } from 'enzyme';
import EmojiPicker from 'EmojiPicker';
import EmojiGroup from 'EmojiGroup';

describe('EmojiPicker', () => {
	it('creates emoji groups for top level groups', () => {
		const data = {
			'group-1': {},
			'group-2': {},
			'group-3': {}
		};

		const subject = shallow(<EmojiPicker data={data} />);

		expect(subject.find(EmojiGroup)).toHaveLength(3);
	});
});
