import { AnimatedImage } from 'react-native-ui-lib';
import { SharedElement } from 'react-navigation-shared-element';
import LottieView from 'lottie-react-native';

import { View } from '@components/Themed';
import { useColorScheme, useToggle } from '@src/hooks';
import type { SplashStackScreenProps } from '@src/navigation/navigators/SplashNavigator/SplashNavigator.props';
import { images, lottie } from '@src/theme';
import { delay } from '@src/utils/common';

const $container = { alignItems: 'center', flex: 1, justifyContent: 'center' };
const $image = { height: 102, width: 102 };
const $lottie = { height: 212, width: 212 };

const Splash = ({ navigation }: SplashStackScreenProps<'Splash'>) => {
  const theme = useColorScheme();
  const [showImage, toggleShowImage] = useToggle(false);

  const start = async () => {
    await delay(1000);
    navigation.replace('App Stack', {
      params: { params: { params: { screen: 'TV Shows' }, screen: 'Series Stack' }, screen: 'Home Tabs' },
      screen: 'Home Stack',
    });
  };

  return (
    <View style={$container}>
      {showImage ? (
        <SharedElement id="logo" onLayout={start}>
          <AnimatedImage animationDuration={300} style={$image} source={images.logo} />
        </SharedElement>
      ) : (
        <LottieView
          autoPlay
          style={$lottie}
          source={lottie.hi[theme]}
          onAnimationFinish={toggleShowImage}
          loop={false}
        />
      )}
    </View>
  );
};

export default Splash;
