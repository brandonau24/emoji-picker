import React from 'react';
import { shallow } from 'enzyme';
import Toggle from 'Toggle';
import ColorThemeSwitch, { toggleTheme } from '../ColorThemeSwitch';

describe('ColorThemeSwitch', () => {
	window.matchMedia = jest.fn().mockReturnValue({
		matches: false
	});

	it('renders sun icon', () => {
		const subject = shallow(<ColorThemeSwitch />);

		expect(subject.find('[data-test="sun-icon"]').prop('name')).toBe('sun-o');
	});

	it('renders moon icon', () => {
		const subject = shallow(<ColorThemeSwitch />);

		expect(subject.find('[data-test="moon-icon"]').prop('name')).toBe('moon-o');
	});

	describe('Change Event', () => {
		it.each([
			[true, true],
			[false, false]
		])('sets useDarkTheme state (%s) to value of switch (%s)', (expectedStateValue, switchValue) => {
			const subject = shallow(<ColorThemeSwitch />);
			const toggle = subject.find(Toggle);
			toggle.simulate('change', { target: { checked: switchValue } });

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
			const toggle = subject.find(Toggle);

			toggle.simulate('change', { target: { checked: switchValue } });

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
			const toggle = subject.find(Toggle);

			expect(getItemSpy).toHaveBeenCalledWith('useDarkTheme');
			expect(toggle.prop('checked')).toBe(expectedSwitchValue);
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
			const toggle = subject.find(Toggle);

			expect(toggle.prop('checked')).toBe(isOsDark);
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
				expect(document.querySelector().classList.remove).toHaveBeenCalledWith('light-theme');
			});

			it('adds light-theme class from emoji-picker when light theme used', () => {
				toggleTheme(false);

				expect(document.querySelector().classList.add).toHaveBeenCalledWith('light-theme');
				expect(document.querySelector().classList.remove).toHaveBeenCalledWith('dark-theme');
			});
		});
	});
});
