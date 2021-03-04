import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Emoji from 'Emoji';

test('component value is set to emoji', () => {
	const emojiName = 'grinning face';
	render(<Emoji codepoints="1F600" name={emojiName} onClick={jest.fn()} />);

	const emojiButton = screen.getByRole('button');

	expect(emojiButton).toHaveValue('😀');
	expect(emojiButton).toHaveAttribute('title', expect.stringMatching('grinning face'));
});

test('callback is called when Emoji is clicked', () => {
	const callback = jest.fn();
	render(<Emoji codepoints="1F600" name="grinning face" onClick={callback} />);

	userEvent.click(screen.getByRole('button'));

	expect(callback).toHaveBeenCalledTimes(1);
});
