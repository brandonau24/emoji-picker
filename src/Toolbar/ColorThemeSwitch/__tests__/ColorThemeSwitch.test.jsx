import React from 'react';
import { shallow } from 'enzyme';
import ColorThemeSwitch from '../ColorThemeSwitch';

describe('ColorThemeSwitch', () => {
	it('sets state to use dark theme when switch is clicked and switch is toggled off', () => {
		const subject = shallow(<ColorThemeSwitch />);

		subject.simulate('change', { target: { checked: true } });

		expect(subject.state('useDarkTheme')).toBeTruthy();
	});

	it('sets state to use light them when switch is toggled on and switch is clicked', () => {
		const subject = shallow(<ColorThemeSwitch />);
		subject.setState({
			useDarkTheme: true
		});

		subject.simulate('change', { target: { checked: false } });

		expect(subject.state('useDarkTheme')).toBeFalsy();
	});
});
