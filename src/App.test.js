import React from 'react';
import { render, waitFor } from '@testing-library/react';

import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { episodeFixture } from './components/Episodes.test';
import userEvent from '@testing-library/user-event';

const mockResObj = {
	data: {
		_embedded: {
			episodes: [{ episodeFixture }],
		},
	},
};

jest.mock('./api/fetchShow');

test('App renders without crashing', () => {
	render(<App />);
});

test('Displays dropdown list of options when Select Season is clicked', async () => {
	mockFetchShow.mockResolvedValueOnce(mockResObj);

	const { queryAllByTestId } = render(<App />);
	const dropdown = queryAllByTestId('dropdown');

	await waitFor(userEvent.click(dropdown));
	await waitFor(() => {
		expect(dropdown.length).toBe(4);
	});
});
