import type { SharedValue } from 'react-native-reanimated';
import { cleanup, screen } from '@testing-library/react-native';

import Slide from '@components/LiquidSwipe/Slide/Slide';
import { render } from '@src/utils/tests';

import Wave from './Wave';
import { Side } from './Wave.types';

afterEach(cleanup);

it('renders correctly', async () => {
  render(
    <Wave
      side={Side.LEFT}
      position={{ x: 0 as unknown as SharedValue<number>, y: 0 as unknown as SharedValue<number> }}
      isTransitioning={false as unknown as SharedValue<boolean>}
    >
      <Slide slide={{ color: 'blue', description: 'Testing', picture: null, title: 'Test' }} />
    </Wave>,
  );

  const text = screen.getByText(/testing/i);

  expect(text).toBeVisible();
  expect(text).toBeOnTheScreen();

  expect(screen.toJSON()).toMatchSnapshot();
});
