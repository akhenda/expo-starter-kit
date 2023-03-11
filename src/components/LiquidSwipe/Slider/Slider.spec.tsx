import { cleanup, screen } from '@testing-library/react-native';
import noop from 'lodash/noop';

import Slide from '@components/LiquidSwipe/Slide/Slide';
import { render } from '@src/utils/tests';

import Slider from './Slider';

afterEach(cleanup);

it('renders correctly', async () => {
  render(
    <Slider index={1} setIndex={noop}>
      <Slide slide={{ color: 'blue', description: 'Testing', picture: null, title: 'Test' }} />
    </Slider>,
  );

  const text = screen.getByText(/testing/i);

  expect(text).toBeVisible();
  expect(text).toBeOnTheScreen();

  expect(screen.toJSON()).toMatchSnapshot();
});
