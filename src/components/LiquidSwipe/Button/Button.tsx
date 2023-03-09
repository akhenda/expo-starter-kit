import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Feather as Icon } from '@expo/vector-icons';

import { Side } from '@components/LiquidSwipe/Wave';
import metrics from '@src/theme/metrics';

import type { ButtonProps } from './Button.types';

const RADIUS = 25;
const { width } = metrics;

const Button = ({ position, side, activeSide }: ButtonProps) => {
  const isLeft = side === Side.LEFT;
  const style = useAnimatedStyle(() => ({
    alignItems: 'center',
    borderRadius: RADIUS,
    height: RADIUS * 2,
    justifyContent: 'center',
    left: isLeft ? position.x.value - RADIUS * 2 : width - position.x.value,
    opacity: withTiming(activeSide.value === Side.NONE ? 1 : 0),
    position: 'absolute',
    top: position.y.value - RADIUS,
    width: RADIUS * 2,
  }));

  return (
    <Animated.View style={style}>
      <Icon name={`chevron-${isLeft ? 'right' : 'left'}` as const} size={24} color="white" />
    </Animated.View>
  );
};

export default Button;
