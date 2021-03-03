import React from 'react';
import { render, screen} from '@testing-library/react';

import Icon from '../Icon';

describe('Icon', () => {
	it('takes name prop and prefixes icon for CSS class', () => {
		render(<Icon name="foo" title="foo" />);

		expect(screen.getByTitle('foo')).toHaveClass('icon-foo');
	});
});
