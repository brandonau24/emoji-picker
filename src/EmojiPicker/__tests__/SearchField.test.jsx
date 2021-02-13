import React from 'react';
import { shallow } from 'enzyme';
import SearchField from '../SearchField';

describe('SearchField', () => {
	it('changes value of input field on every keystroke', () => {
		const subject = shallow(<SearchField />);

		subject.instance().onChange({
			target: {
				value: 'new value'
			}
		});

		expect(subject.prop('value')).toBe('new value');
	});
});
