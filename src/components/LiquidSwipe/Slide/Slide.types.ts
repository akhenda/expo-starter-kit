import type { ViewProps } from 'react-native';

export interface SlideProps extends ViewProps {
  slide: {
    color: string;
    title: string;
    description: string;
    picture: ReturnType<typeof require>;
  };
}
