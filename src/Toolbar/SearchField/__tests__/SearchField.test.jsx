import React from 'react';
import { shallow } from 'enzyme';
import Icon from 'Icon';
import SearchField from 'Toolbar/SearchField/SearchField';

describe('SearchField', () => {
	const callback = jest.fn();
	let subject;

	beforeEach(() => {
		subject = shallow(<SearchField onChangeCallback={callback} />);
	});

	it('changes value of input field on every keystroke', () => {
		subject.find('input').simulate('change', {
			target: {
				value: 'new value'
			}
		});

		expect(subject.find('input').prop('value')).toBe('new value');
	});

	it('calls callback with search value', () => {
		subject.find('input').simulate('change', {
			target: {
				value: 'new value'
			}
		});

		expect(callback).toHaveBeenCalledWith('new value');
	});

	it('renders a search icon', () => {
		expect(subject.find(Icon).prop('name')).toBe('search');
	});
});
