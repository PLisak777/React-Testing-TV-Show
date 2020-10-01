import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { episodeFixture } from './components/Episodes.test';

jest.mock('./api/fetchShow')

test('App renders without crashing', () => {
    render(<App />)
})