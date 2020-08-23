import React from 'react';
import { shallow } from 'enzyme';
import Emoji from 'Emoji';

describe('Emoji', () => {
	let subject;

	beforeEach(() => {
		subject = shallow(<Emoji codepoints="1F600" name="grinning face" />);
	});

	it('has value set to codepoints', () => {
		expect(subject.find('.emoji').text()).toBe('😀');
		expect(subject.find('.emoji').prop('value')).toBe('😀');
	});

	it('has alt. text set to the name of the emoji', () => {
		expect(subject.find('.emoji').prop('alt')).toBe('grinning face');
	});

	it('has title prop set to the name of the emoji', () => {
		expect(subject.find('.emoji').prop('title')).toBe('grinning face');
	});
});
