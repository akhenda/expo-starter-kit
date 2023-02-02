import { useEffect } from 'react';
import { Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { View } from '@components/Themed';
import type { SplashStackScreenProps } from '@src/navigation/navigators/SplashNavigator/SplashNavigator.props';
import { images } from '@src/theme';

const Splash = ({ navigation }: SplashStackScreenProps<'Splash'>) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('App Stack', {
        params: { params: { params: { screen: 'TV Shows' }, screen: 'Series Stack' }, screen: 'Home Tabs' },
        screen: 'Home Stack',
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <SharedElement id="logo">
        <Image style={{ height: 84, width: 84 }} source={images.logo} />
      </SharedElement>
    </View>
  );
};

export default Splash;
