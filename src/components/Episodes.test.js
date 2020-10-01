import React from 'react';
import { render } from '@testing-library/react'

import Episodes from './Episodes';

export const episodeFixture = [
    {
        id: 0,
        name: 'fake name',
        season: 0,
        number: 0,
        summary: 'fake info',
        runtime: 60
    }
]

test('Episodes runs without crashing', () => {
    render(<Episodes episodes={[episodeFixture]} />)
})
