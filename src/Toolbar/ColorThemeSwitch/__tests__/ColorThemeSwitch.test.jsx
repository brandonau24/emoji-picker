import React from 'react';
import { shallow } from 'enzyme';
import Icon from 'Icon';
import ColorThemeSwitch from '../ColorThemeSwitch';

describe('ColorThemeSwitch', () => {
	window.matchMedia = jest.fn().mockReturnValue({
		matches: false
	});

	it('renders sun icon', () => {
		const subject = shallow(<ColorThemeSwitch />);

		expect(subject.find('.sun-icon').prop('name')).toBe('sun-o');
	});

	it('renders moon icon', () => {
		const subject = shallow(<ColorThemeSwitch />);

		expect(subject.find('.moon-icon').prop('name')).toBe('moon-o');
	});

	describe('Change Event', () => {
		it.each([
			[true, true],
			[false, false]
		])('sets useDarkTheme state (%s) to value of switch (%s)', (expectedStateValue, switchValue) => {
			const subject = shallow(<ColorThemeSwitch />);
			const colorThemeSwitch = subject.find('#color-theme-switch');
			colorThemeSwitch.simulate('change', { target: { checked: switchValue } });

			expect(subject.state('useDarkTheme')).toBe(expectedStateValue);
		});
	});

	describe('User Preference with Local Storage', () => {
		const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

		it.each([
			[true, true],
			[false, false]
		])('sets user preference (%s) to value of switch (%s)', (expectedUserPref, switchValue) => {
			const subject = shallow(<ColorThemeSwitch />);
			const colorThemeSwitch = subject.find('#color-theme-switch');

			colorThemeSwitch.simulate('change', { target: { checked: switchValue } });

			expect(setItemSpy).toHaveBeenCalledWith('useDarkTheme', expectedUserPref);
		});

		// true = dark theme
		it.each([
			[false, true],
			[true, false]
		])('prioritizes user theme preference (%s) over OS theme (%s)', (expectedSwitchValue, isOsDark,) => {
			const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => expectedSwitchValue);
			window.matchMedia.mockReturnValueOnce({
				matches: isOsDark
			});

			const subject = shallow(<ColorThemeSwitch />);
			const colorThemeSwitch = subject.find('#color-theme-switch');

			expect(getItemSpy).toHaveBeenCalledWith('useDarkTheme');
			expect(colorThemeSwitch.prop('checked')).toBe(expectedSwitchValue);
		});

		// true = dark theme
		it.each([
			[true],
			[false]
		])('uses OS theme settings (%s) when user preference is not set', (isOsDark) => {
			jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);
			window.matchMedia.mockReturnValueOnce({
				matches: isOsDark
			});

			const subject = shallow(<ColorThemeSwitch />);
			const colorThemeSwitch = subject.find('#color-theme-switch');

			expect(colorThemeSwitch.prop('checked')).toBe(isOsDark);
		});
	});
});
