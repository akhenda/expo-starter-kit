import type { ReactElement } from 'react';
import type { ViewProps } from 'react-native';

import type { SlideProps } from '@components/LiquidSwipe/Slide';

export interface SliderProps extends ViewProps {
  index: number;
  setIndex: (value: number) => void;
  children: ReactElement<SlideProps>;
  prev?: ReactElement<SlideProps>;
  next?: ReactElement<SlideProps>;
}
