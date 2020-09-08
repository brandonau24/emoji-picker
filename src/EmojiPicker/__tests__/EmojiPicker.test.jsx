import React from 'react';
import { shallow, mount } from 'enzyme';
import EmojiPicker from 'EmojiPicker';
import EmojiGroup from 'EmojiGroup';

describe('EmojiPicker', () => {
	const data = {
		version: '13.0',
		'group-1': {},
		'group-2': {},
		'group-3': {}
	};

	let subject;

	beforeEach(() => {
		subject = shallow(<EmojiPicker data={data} />);
	});

	it('creates emoji groups for top level groups', () => {
		expect(subject.find(EmojiGroup)).toHaveLength(3);
	});

	it('creates footer with Unicode version', () => {
		const footer = subject.find('#footer');

		expect(footer.text()).toBe(`Built with Unicode Emoji v${data.version}`);
	});

	describe('#copyEmoji', () => {
		it('copies emoji to clipboard', () => {
			const createElementSpy = jest.spyOn(document, 'createElement');
			const appendChildSpy = jest.spyOn(document.body, 'appendChild');
			const removeChildSpy = jest.spyOn(document.body, 'removeChild');
			const execCommandSpy = jest.spyOn(document, 'execCommand');

			const emojiData = {
				version: '13.0',
				'group-1': {
					'subgroup-1': [
						{
							codepoints: '1F600',
							name: 'grinning face'
						}
					]
				},
			};

			subject = mount(<EmojiPicker data={emojiData} />);
			subject.find('.emoji').simulate('click');

			expect(createElementSpy).toBeCalledWith('textarea');
			expect(appendChildSpy).toBeCalled();
			expect(removeChildSpy).toBeCalled();
			expect(execCommandSpy).toBeCalledWith('copy');
		});
	});
});
