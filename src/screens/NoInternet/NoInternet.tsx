import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, Platform, Pressable } from 'react-native';
import { ActivityAction, startActivityAsync } from 'expo-intent-launcher';

import { Text, View } from '@components/Themed';
import { EmptyState } from '@src/components/EmptyStateView';
import { lottie } from '@src/theme';

import styles from './NoInternet.styles';

const { $content, $description, $image, $title } = styles;

const Offline = () => {
  const { t } = useTranslation();
  const checkSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openSettings();
    } else {
      // DATA_ROAMING_SETTINGS/WIRELESS_SETTINGS
      startActivityAsync(ActivityAction.WIRELESS_SETTINGS);
    }
  };

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
        <Pressable onPress={checkSettings}>
          <Text>{t('Check Settings')}</Text>
        </Pressable>
      </EmptyState>
    </View>
  );
};

export default Offline;
