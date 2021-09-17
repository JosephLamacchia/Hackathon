import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simon Game Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simon Game/);
  expect(linkElement).toBeInTheDocument();
});
