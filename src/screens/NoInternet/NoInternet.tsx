import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Linking, Platform } from 'react-native';
import { Button } from 'react-native-ui-lib';
import { useNetInfo } from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityAction, startActivityAsync } from 'expo-intent-launcher';

import { View } from '@components/Themed';
import { EmptyState } from '@src/components/EmptyStateView';
import type { RootStackScreenProps } from '@src/navigation/navigators/RootNavigator';
import { lottie } from '@src/theme';

import styles from './NoInternet.styles';

const { $content, $description, $image, $title } = styles;

const Offline = ({ navigation }: RootStackScreenProps<'You are Offline'>) => {
  const { t } = useTranslation();
  const { isConnected } = useNetInfo();

  const checkSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openSettings();
    } else {
      // DATA_ROAMING_SETTINGS/WIRELESS_SETTINGS
      startActivityAsync(ActivityAction.WIRELESS_SETTINGS);
    }
  };

  const showAlert = useCallback(() => {
    if (!isConnected) {
      Alert.alert('No Connection', 'The application will resume as soon as it is able to reconnect to the internet.', [
        { style: 'cancel', text: 'Cancel' },
        {
          onPress: checkSettings,
          text: t('Go to Settings') as string,
        },
      ]);
    }
  }, [isConnected, t]);

  /**
   * https://reactnavigation.org/docs/preventing-going-back/
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (isConnected) return;

      // Prevent default behavior of leaving the screen
      e.preventDefault();

      showAlert();
    });

    return unsubscribe;
  }, [navigation, isConnected, showAlert]);

  useFocusEffect(
    useCallback(() => {
      if (isConnected) navigation.goBack();
    }, [isConnected, navigation]),
  );

  return (
    <View style={$content}>
      <EmptyState
        lottieSource={lottie.noInternet}
        lottieStyle={$image}
        headerTextStyle={$title}
        subHeaderTextStyle={$description}
        headerText={t('No Internet Connection')}
        subHeaderText={t(
          "We're sorry, there seems to be a problem with your internet connection. The application will resume as soon as it is able to reconnect to the internet.",
        )}
      >
        <Button label={t('Check Settings')} onPress={checkSettings} />
      </EmptyState>
    </View>
  );
};

export default Offline;
