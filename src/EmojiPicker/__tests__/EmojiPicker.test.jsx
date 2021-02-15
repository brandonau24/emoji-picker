import React from 'react';
import { shallow, mount } from 'enzyme';
import twemoji from 'twemoji';
import EmojiPicker from 'EmojiPicker';
import EmojiGroup from 'EmojiGroup';
import Emoji from 'Emoji';

describe('EmojiPicker', () => {
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

	// This test needs to be before any state updates
	// The goal of this test is to ensure the parse function is called once when state updates
	// However, putting this test after the one below it shows 2 calls, not one
	// For reasons unknown, the instance of subject is not different between the 2 tests
	// which means state changes between tests are present
	it('parses with twemoji after component is updated', () => {
		subject.setState({ searchValue: 'foo' });

		expect(twemoji.parse).toHaveBeenCalledTimes(1);
	});

	it('sets state of search field value from callback', () => {
		subject.instance().onSearchValueChange('new value');

		expect(subject.state('searchValue')).toBe('new value');
	});

	it('renders emojis that include the search value (case insensitive)', () => {
		subject.setState({ searchValue: 'face' });

		expect(subject.find(Emoji)).toHaveLength(2);
	});
});
