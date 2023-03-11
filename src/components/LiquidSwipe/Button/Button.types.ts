import type { ViewProps } from 'react-native';
import type Animated from 'react-native-reanimated';
import type { Vector } from 'react-native-redash';

import type { Side } from '@components/LiquidSwipe/Wave';

export interface ButtonProps extends ViewProps {
  position: Vector<Animated.SharedValue<number>>;
  side: Side;
  activeSide: Animated.SharedValue<Side>;
}
