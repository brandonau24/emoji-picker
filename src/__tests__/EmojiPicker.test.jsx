import React from 'react';
import { shallow } from 'enzyme';
import EmojiPicker from 'EmojiPicker';
import EmojiGroup from 'EmojiGroup';

describe('EmojiPicker', () => {
	it('creates emoji groups for top level groups', () => {
		const data = {
			version: '13.0',
			'group-1': {},
			'group-2': {},
			'group-3': {}
		};

		const subject = shallow(<EmojiPicker data={data} />);

		expect(subject.find(EmojiGroup)).toHaveLength(3);
	});

	it('creates footer with Unicode version', () => {
		const data = {
			version: '13.0',
			'group-1': {},
			'group-2': {},
			'group-3': {}
		};

		const subject = shallow(<EmojiPicker data={data} />);
		const footer = subject.find('#footer');

		expect(footer.text()).toBe(`Built with Unicode Emoji v${data.version}`);
	});
});
