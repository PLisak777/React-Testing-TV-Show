import React from 'react';
import { render, waitFor } from '@testing-library/react';

import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { episodeFixture } from './components/Episodes.test';
import userEvent from '@testing-library/user-event';

jest.mock('./api/fetchShow')


test('App renders without crashing', () => {
    render(<App />)
})

test('Displays dropdown list of options when Select Season is clicked', async () => {
    mockFetchShow.mockResolvedValueOnce({ data: episodeFixture })

    const { queryByTestId } = render(<App />);
    const dropdown = queryByTestId('dropdown');

    await waitFor(userEvent.click(dropdown))    
    await waitFor(() => {
        expect(dropdown.length).toBe(4);
    })
})