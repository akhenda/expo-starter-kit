/**
 * Example React Native tests
 *
 * Ref:
 * @see https://github.com/vanGalilea/react-native-testing/blob/master/__tests__
 * @see https://testing-library.com/docs/react-native-testing-library/example-intro
 * @see https://testing-library.com/docs/react-native-testing-library/setup
 * @see https://callstack.github.io/react-native-testing-library/docs/react-navigation
 * @see https://testing-library.com/docs/react-testing-library/example-intro#full-example to
 * see an example that uses msw for api requests
 */
import { cleanup, fireEvent, screen } from '@testing-library/react-native';

import { typography } from '@src/theme';
import { render } from '@src/utils/tests';

import Series from './Series';

afterEach(cleanup);

it('renders correctly', async () => {
  const typedEmail = 'john@doe.me';

  render(<Series />);

  const theme = screen.getByTestId('theme');
  const roundButton = screen.getByTestId('button');
  const buttonText = screen.getByText(/change theme/i);
  const h1 = screen.getByText(/h1/i);
  const caption = screen.getByText(/caption/i);
  const overline = screen.getByText(/overline/i);

  expect(theme).toHaveTextContent('default');
  expect(h1).toHaveTextContent('H1 Series');
  expect(caption).toHaveTextContent('Caption');
  expect(overline).toHaveTextContent('Overline');
  expect(buttonText).toHaveTextContent('Change Theme');

  await fireEvent.changeText(screen.getByPlaceholderText(/Placeholder/i), typedEmail);

  // Using `findBy` query to wait for asynchronous operation to finish
  const email = await screen.findByTestId('email');

  // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
  expect(email).toHaveTextContent(typedEmail);

  expect(h1).toHaveStyle({ color: 'rgba(0, 0, 0, 0.87)' });
  expect(h1).not.toHaveStyle({ color: '#fff' });

  fireEvent.press(buttonText);

  expect(theme).toHaveTextContent('dark');
  expect(h1).toHaveStyle({ ...typography.dark.h1 });
  expect(h1).toHaveStyle({ color: '#fff' });
  expect(h1).not.toHaveStyle({ color: 'rgba(0, 0, 0, 0.87)' });
  expect(buttonText.instance).toBeNull();

  fireEvent.press(roundButton);

  expect(theme).toHaveTextContent('light');
  expect(h1).toHaveStyle({ ...typography.light.h1 });
  expect(h1).toHaveStyle({ color: 'rgba(0, 0, 0, 0.87)' });
  expect(h1).not.toHaveStyle({ color: '#fff' });

  expect(screen.toJSON()).toMatchSnapshot();
});
