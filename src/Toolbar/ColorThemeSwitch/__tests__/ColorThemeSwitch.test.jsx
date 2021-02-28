import React from 'react';
import { shallow } from 'enzyme';
import ColorThemeSwitch, { toggleTheme } from '../ColorThemeSwitch';

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
			const colorThemeSwitch = subject.find('.color-theme-switch__input');
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
			const colorThemeSwitch = subject.find('.color-theme-switch__input');

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
			const colorThemeSwitch = subject.find('.color-theme-switch__input');

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
			const colorThemeSwitch = subject.find('.color-theme-switch__input');

			expect(colorThemeSwitch.prop('checked')).toBe(isOsDark);
		});

		it('parses boolean string correctly from storage', () => {
			const jsonParseSpy = jest.spyOn(JSON, 'parse');
			jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'false');
			window.matchMedia.mockReturnValueOnce({
				matches: false
			});

			const subject = shallow(<ColorThemeSwitch />);

			expect(jsonParseSpy).toHaveBeenCalledWith('false');
			expect(subject.state('useDarkTheme')).toBeFalsy();
		});

		describe('#toggleTheme', () => {
			beforeEach(() => {
				shallow(<div id="emoji-picker" />);
			});

			it('adds dark-theme class to emoji-picker when dark theme is used', () => {
				toggleTheme(true);

				expect(document.querySelector).toHaveBeenCalledWith('#emoji-picker');
				expect(document.querySelector().classList.add).toHaveBeenCalledWith('dark-theme');
			});

			it('removes dark-theme class from emoji-picker when light theme used', () => {
				toggleTheme(false);

				expect(document.querySelector().classList.remove).toHaveBeenCalledWith('dark-theme');
			});
		});
	});
});
