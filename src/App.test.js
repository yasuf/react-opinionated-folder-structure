import { render, screen } from '@testing-library/react';
import App from './App';

test('renders save to reload message', () => {
  render(<App />);
  const saveToReloadElement = screen.getByText(/React Opinionated Folder Structure/i);
  expect(saveToReloadElement).toBeInTheDocument();
});
