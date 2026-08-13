// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FluxZenith title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FluxZenith/i);
    expect(titleElement).toBeInTheDocument();
});
