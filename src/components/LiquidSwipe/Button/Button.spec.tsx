import type { SharedValue } from 'react-native-reanimated';
import { cleanup, screen } from '@testing-library/react-native';

import { Side } from '@components/LiquidSwipe/Wave';
import { render } from '@src/utils/tests';

import Button from './Button';

afterEach(cleanup);

it('renders correctly', async () => {
  render(
    <Button
      position={{ x: 0 as unknown as SharedValue<number>, y: 0 as unknown as SharedValue<number> }}
      side={Side.LEFT}
      activeSide={Side.LEFT as unknown as SharedValue<Side>}
    />,
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
