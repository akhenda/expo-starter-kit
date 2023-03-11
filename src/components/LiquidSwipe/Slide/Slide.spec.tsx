import { cleanup, screen } from '@testing-library/react-native';

import { render } from '@src/utils/tests';

import Slide from './Slide';

afterEach(cleanup);

it('renders correctly', async () => {
  render(<Slide slide={{ color: 'blue', description: 'Testing', picture: null, title: 'Test' }} />);

  const text = screen.getByText(/testing/i);

  expect(text).toBeVisible();
  expect(text).toBeOnTheScreen();

  expect(screen.toJSON()).toMatchSnapshot();
});
