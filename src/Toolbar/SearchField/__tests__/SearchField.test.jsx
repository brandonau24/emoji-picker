import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from 'Toolbar/SearchField/SearchField';

test('renders a search icon', () => {
	render(<SearchField onChangeCallback={jest.fn()} />);

	expect(screen.getByTitle('Search for an emoji')).toBeVisible();
});

test('changes value of search field on every keystroke', () => {
	render(<SearchField onChangeCallback={jest.fn()} />);

	const searchField = screen.getByRole('textbox');

	userEvent.type(searchField, 'a');
	expect(searchField).toHaveValue('a');

	userEvent.type(searchField, 'b');
	expect(searchField).toHaveValue('ab');

	userEvent.type(searchField, '{space}');
	expect(searchField).toHaveValue('ab ');

	userEvent.type(searchField, '{selectall}{backspace}');
	expect(searchField).toHaveValue('');
});

test('change event callback is called with search field value', () => {
	const callback = jest.fn();

	render(<SearchField onChangeCallback={callback} />);

	const searchField = screen.getByRole('textbox');

	userEvent.type(searchField, 'a');
	expect(callback).toHaveBeenCalledWith('a');

	userEvent.type(searchField, 'b');
	expect(callback).toHaveBeenCalledWith('ab');

	userEvent.type(searchField, '{space}');
	expect(callback).toHaveBeenCalledWith('ab ');

	userEvent.type(searchField, '{selectall}{backspace}');
	expect(callback).toHaveBeenCalledWith('');
});

// describe('SearchField', () => {
// 	const callback = jest.fn();
// 	let subject;

// 	beforeEach(() => {
// 		subject = shallow(<SearchField onChangeCallback={callback} />);
// 	});

// 	it('changes value of input field on every keystroke', () => {
// 		subject.find('input').simulate('change', {
// 			target: {
// 				value: 'new value'
// 			}
// 		});

// 		expect(subject.find('input').prop('value')).toBe('new value');
// 	});

// 	it('calls callback with search value', () => {
// 		subject.find('input').simulate('change', {
// 			target: {
// 				value: 'new value'
// 			}
// 		});

// 		expect(callback).toHaveBeenCalledWith('new value');
// 	});

// 	it('renders a search icon', () => {
// 		expect(subject.find(Icon).prop('name')).toBe('search');
// 	});
// });
