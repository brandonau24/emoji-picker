import React from 'react';
import { shallow } from 'enzyme';
import ColorThemeSwitch from '../ColorThemeSwitch';

describe('ColorThemeSwitch', () => {
	window.matchMedia = jest.fn().mockReturnValue({
		matches: false
	});

	describe('Change Event', () => {
		let subject;

		beforeEach(() => {
			subject = shallow(<ColorThemeSwitch />);
		});

		it('sets state to use dark theme when switch is clicked and switch is toggled off', () => {
			subject.simulate('change', { target: { checked: true } });

			expect(subject.state('useDarkTheme')).toBeTruthy();
		});

		it('sets state to use light them when switch is toggled on and switch is clicked', () => {
			subject.setState({
				useDarkTheme: true
			});

			subject.simulate('change', { target: { checked: false } });

			expect(subject.state('useDarkTheme')).toBeFalsy();
		});
	});

	// describe('Media Query Value', () => {
	// 	it('sets state to use dark theme when user OS theme is dark', () => {
	// 		window.matchMedia.mockReturnValueOnce({
	// 			matches: true
	// 		});

	// 		const subject = shallow(<ColorThemeSwitch />);

	// 		expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
	// 		expect(subject.prop('checked')).toBeTruthy();
	// 	});

	// 	it('sets state to use light theme when user OS theme is light', () => {
	// 		window.matchMedia.mockReturnValueOnce({
	// 			matches: false
	// 		});

	// 		const subject = shallow(<ColorThemeSwitch />);

	// 		expect(subject.prop('checked')).toBeFalsy();
	// 	});
	// });

	describe('User Preference with Local Storage', () => {
		const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

		it('sets user preference to dark theme when switch is toggled on', () => {
			const subject = shallow(<ColorThemeSwitch />);

			subject.simulate('change', { target: { checked: true } });

			expect(setItemSpy).toHaveBeenCalledWith('useDarkTheme', true);
		});

		it('sets user preference to light theme when switch is toggled off', () => {
			const subject = shallow(<ColorThemeSwitch />);

			subject.simulate('change', { target: { checked: false } });

			expect(setItemSpy).toHaveBeenCalledWith('useDarkTheme', false);
		});

		it('prioritizes dark theme user preference over OS theme', () => {
			const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => true);
			window.matchMedia.mockReturnValueOnce({
				matches: false
			});

			const subject = shallow(<ColorThemeSwitch />);

			expect(getItemSpy).toHaveBeenCalledWith('useDarkTheme');
			expect(subject.prop('checked')).toBeTruthy();
		});

		it('prioritizes light theme user preference over OS theme', () => {
			jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => false);
			window.matchMedia.mockReturnValueOnce({
				matches: true
			});

			const subject = shallow(<ColorThemeSwitch />);

			expect(subject.prop('checked')).toBeFalsy();
		});
	});
});
