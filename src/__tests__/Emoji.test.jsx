import React from 'react';
import { shallow } from 'enzyme';
import Emoji from 'Emoji';

describe('Emoji', () => {
	it('has value set to codepoints', () => {
		const subject = shallow(<Emoji codepoints="codepoints" />);

		expect(subject.find('.emoji').text()).toBe('codepoints');
	});
});
