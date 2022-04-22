import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event'
import Button from '.';

test('renders button', () => {
  render(<Button title="foo bar" onClick={() => {}}/>);
  const buttonTitle = screen.getByText(/foo bar/i);
  expect(buttonTitle).toBeInTheDocument();
});

describe('when clicked', () => {
  test('runs the desired action', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<Button onClick={callback} title="foo bar"/>);

    await user.click(screen.getByRole('button'));

    expect(callback).toHaveBeenCalled();
  })
})
