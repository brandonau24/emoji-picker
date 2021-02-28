document.execCommand = jest.fn();
document.querySelector = jest.fn().mockReturnValue({
	classList: {
		add: jest.fn(),
		remove: jest.fn()
	}
});
