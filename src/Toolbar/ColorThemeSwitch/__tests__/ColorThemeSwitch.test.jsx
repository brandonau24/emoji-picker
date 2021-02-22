import React from 'react';
import { shallow } from 'enzyme';
import ColorThemeSwitch from '../ColorThemeSwitch';

describe('ColorThemeSwitch', () => {
	window.matchMedia = jest.fn().mockReturnValue({
		matches: false
	});

	describe('Change Event', () => {
		let subject;

		afterAll(() => {
			window.matchMedia.mockReset();
		});

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

	describe('Media Query Value', () => {
		it('sets state to use dark theme when user OS theme is dark', () => {
			window.matchMedia.mockReturnValueOnce({
				matches: true
			});

			const subject = shallow(<ColorThemeSwitch />);

			expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
			expect(subject.prop('checked')).toBeTruthy();

			window.matchMedia.mockReset();
		});

		it('sets state to use light theme when user OS theme is light', () => {
			window.matchMedia.mockReturnValueOnce({
				matches: false
			});

			const subject = shallow(<ColorThemeSwitch />);

			expect(subject.prop('checked')).toBeFalsy();
		});
	});
});
