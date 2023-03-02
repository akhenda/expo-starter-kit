import type { TextStyle, ViewStyle } from 'react-native';

import { EmptyState } from '@src/components';
import { View } from '@src/components/Themed';
import { images } from '@src/theme';

const containerStyles: ViewStyle = {
  flex: 1,
};

const textStyles: TextStyle = {
  marginTop: 8,
  textAlign: 'center',
};

const Notifications = () => {
  return (
    <View style={containerStyles}>
      <EmptyState
        imageSource={images.empty.noNotifications}
        headerText="You are all caught up"
        subHeaderText="You have no new notifications"
        headerTextStyle={textStyles}
        subHeaderTextStyle={textStyles}
      />
    </View>
  );
};

export default Notifications;
