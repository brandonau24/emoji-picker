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

	it('adds click event listener to document after mounting', () => {
		const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

		// Rerender component since the spy occurs after the beforeEach
		subject = shallow(<EmojiPicker data={data} />);

		expect(addEventListenerSpy).toBeCalledWith('click', EmojiPicker.copyEmoji);
	});

	it('removes click event listener to document when unmounting', () => {
		const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
		const mountedSubject = mount(<EmojiPicker data={data} />);

		mountedSubject.unmount();
		expect(removeEventListenerSpy).toBeCalledWith('click', EmojiPicker.copyEmoji);
	});
});
