import React from 'react';
import { shallow } from 'enzyme';
import Toggle from 'Toggle';

describe('Toggle', () => {
	it('sets checkbox to checked when prop is true', () => {
		const subject = shallow(<Toggle id="id" checked onChange={jest.fn()} />);

		expect(subject.find('#id').prop('checked')).toBeTruthy();
	});

	it('defaults to false when checked prop is not given', () => {
		const subject = shallow(<Toggle id="id" onChange={jest.fn()} />);

		expect(subject.find('#id').prop('checked')).toBeFalsy();
	});

	it('sets label for toggle to id prop value', () => {
		const subject = shallow(<Toggle id="id" onChange={jest.fn()} />);

		expect(subject.find('.switch').prop('htmlFor')).toBe('id');
		expect(subject.find('#id')).toHaveLength(1);
	});

	it('calls onChange callback passed in as props when change event occurs', () => {
		const callback = jest.fn();
		const subject = shallow(<Toggle id="id" onChange={callback} />);

		subject.find('#id').simulate('change');

		expect(callback).toHaveBeenCalledTimes(1);
	});
});
