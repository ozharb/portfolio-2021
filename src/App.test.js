import { render, screen } from '@testing-library/react';
import App from './App';

test('renders word', () => {
  render(<App />);
  const word = screen.getByText(/parallax!/i);
  expect(word).toBeInTheDocument();
});
