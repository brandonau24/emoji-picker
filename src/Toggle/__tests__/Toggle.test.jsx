import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toggle from 'Toggle';

test('sets checkbox to true when prop passed in is true', () => {
	render(<Toggle id="id" checked onChange={jest.fn()} />);

	expect(screen.getByRole('checkbox')).toBeChecked();
});

test('checkbox is not checked when checked prop is not given', () => {
	render(<Toggle id="id" onChange={jest.fn()} />);

	expect(screen.getByRole('checkbox')).not.toBeChecked();
});

test('label is associated to checkbox', () => {
	render(<Toggle id="id" onChange={jest.fn()} />);

	expect(screen.getByTestId('toggle-label')).toHaveAttribute('for', expect.stringMatching('id'));
});

test('callback is called when checkbox is clicked', () => {
	const callback = jest.fn();
	render(<Toggle id="id" onChange={callback} />);

	userEvent.click(screen.getByRole('checkbox'));

	expect(callback).toHaveBeenCalledTimes(1);
});
