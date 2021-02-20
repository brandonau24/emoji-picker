import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../Icon';

describe('Icon', () => {
	it('takes name prop and prefixes icon for CSS class', () => {
		const subject = shallow(<Icon name="foo" />);

		expect(subject.find('.icon-foo')).toHaveLength(1);
	});
});
