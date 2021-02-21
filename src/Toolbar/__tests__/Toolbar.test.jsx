import React from 'react';
import { shallow } from 'enzyme';

import SearchField from 'Toolbar/SearchField/SearchField';
import Toolbar from '../Toolbar';

describe('Toolbar', () => {
	it('renders a SearchField as a child of the toolbar', () => {
		const subject = shallow(<Toolbar onSearchFieldChangeCallback={jest.fn()} />);

		expect(subject.find('.toolbar').find(SearchField)).toHaveLength(1);
	});
});
