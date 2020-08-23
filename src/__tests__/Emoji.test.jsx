import React from 'react';
import { shallow } from 'enzyme';
import Emoji from 'Emoji';

describe('Emoji', () => {
	let subject;

	beforeEach(() => {
		subject = shallow(<Emoji codepoints="codepoints" name="emoji" />);
	});

	it('has value set to codepoints', () => {
		expect(subject.find('.emoji').text()).toBe('codepoints');
		expect(subject.find('.emoji').prop('value')).toBe('codepoints');
	});

	it('has alt. text set to the name of the emoji', () => {
		expect(subject.find('.emoji').prop('alt')).toBe('emoji');
	});
});
