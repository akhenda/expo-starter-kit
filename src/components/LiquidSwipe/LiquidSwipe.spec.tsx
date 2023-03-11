import { cleanup, screen } from '@testing-library/react-native';

import { render } from '@src/utils/tests';

import LiquidSwipe from './LiquidSwipe';

afterEach(cleanup);

it('renders correctly', async () => {
  render(<LiquidSwipe />);

  expect(screen.toJSON()).toMatchSnapshot();
});
