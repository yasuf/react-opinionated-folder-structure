import { render, screen } from '../../test-utils';
import App from '.';

test('renders save to reload message', () => {
  render(<App />);
  const saveToReloadElement = screen.getByText(/React Opinionated/i);
  expect(saveToReloadElement).toBeInTheDocument();
});
