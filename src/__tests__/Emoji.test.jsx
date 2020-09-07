import React from 'react';
import { shallow } from 'enzyme';
import Emoji from 'Emoji';

describe('Emoji', () => {
	const onClick = jest.fn();
	let subject;

	beforeEach(() => {
		subject = shallow(<Emoji codepoints="1F600" name="grinning face" onClick={onClick} />);
	});

	it('has value set to codepoints', () => {
		expect(subject.text()).toBe('😀');
		expect(subject.prop('value')).toBe('😀');
	});

	it('has alt. text set to the name of the emoji', () => {
		expect(subject.prop('alt')).toBe('grinning face');
	});

	it('has title prop set to the name of the emoji', () => {
		expect(subject.prop('title')).toBe('grinning face');
	});

	it('binds click handler from props', () => {
		expect(subject.prop('onClick')).toBe(onClick);
	});
});
