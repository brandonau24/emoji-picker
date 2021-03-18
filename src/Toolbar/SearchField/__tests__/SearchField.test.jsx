import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchField from 'Toolbar/SearchField/SearchField';

test('renders a search icon', () => {
	render(<SearchField onChangeCallback={jest.fn()} searchValue="" />);

	expect(screen.getByTitle('Search for an emoji')).toBeVisible();
});

test('change event callback is called with search field value', () => {
	const callback = jest.fn();

	render(<SearchField onChangeCallback={callback} searchValue="" />);

	const searchField = screen.getByRole('textbox');

	userEvent.type(searchField, 'a');
	expect(callback).toHaveBeenCalledWith('a');
});
