// app.test.tsx
import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './app';

test('renders hello message', () => {
    render(<App />);

    const helloElement = screen.getByText(/Witaj/i);
    expect(helloElement).toBeDefined();
});
