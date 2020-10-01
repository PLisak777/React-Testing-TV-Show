import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { episodeFixture } from './components/Episodes.test';

jest.mock('./api/fetchShow')

test('App renders without crashing', () => {
    render(<App />)
})

test('App fetches and renders data', async () => {
    mockFetchShow.mockResolvedValueOnce({ data: episodeFixture })

    const { getByText, queryAllByTestId } = render(<App />);
    const button = getByText(/season 1/i);

    fireEvent.click(button)

    expect(queryAllByTestId(/episodes/i)).toHaveLength(8)
})