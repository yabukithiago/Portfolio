import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio home page', () => {
  render(<App />);
  const nameElement = screen.getByText(/THIAGO YABUKI DE ARAUJO/i);
  expect(nameElement).toBeInTheDocument();
});
