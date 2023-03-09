import type { ReactElement } from 'react';
import type { ViewProps } from 'react-native';
import type Animated from 'react-native-reanimated';
import type { Vector } from 'react-native-redash';

import type { SlideProps } from '@components/LiquidSwipe/Slide';

export enum Side {
  LEFT,
  RIGHT,
  NONE,
}

export interface WaveProps extends ViewProps {
  side: Side;
  position: Vector<Animated.SharedValue<number>>;
  children: ReactElement<SlideProps>;
  isTransitioning: Animated.SharedValue<boolean>;
}
