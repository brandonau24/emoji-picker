import React from 'react';
import { shallow } from 'enzyme';
import SearchField from '../SearchField';

describe('SearchField', () => {
	const callback = jest.fn();
	let subject;

	beforeEach(() => {
		subject = shallow(<SearchField onChangeCallback={callback} />);
	});

	it('changes value of input field on every keystroke', () => {
		subject.instance().onChange({
			target: {
				value: 'new value'
			}
		});

		expect(subject.find('input').prop('value')).toBe('new value');
	});

	it('calls callback with search value', () => {
		subject.instance().onChange({
			target: {
				value: 'new value'
			}
		});

		expect(callback).toHaveBeenCalledWith('new value');
	});
});
