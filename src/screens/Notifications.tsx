import type { TextStyle } from 'react-native';

import { EmptyState } from '@src/components';
import { View } from '@src/components/Themed';
import { images } from '@src/theme';

const textStyles: TextStyle = {
  marginTop: 8,
  textAlign: 'center',
};

const Notifications = () => {
  return (
    <View style={{ flex: 1 }}>
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
