import type { ImageStyle, TextStyle } from 'react-native';

import { EmptyState } from '@src/components';
import { View } from '@src/components/Themed';
import { images } from '@src/theme';

const imageStyle: ImageStyle = {
  marginBottom: 20,
  opacity: 0.5,
};

const textStyles: TextStyle = {
  marginHorizontal: 10,
  marginTop: 8,
  textAlign: 'center',
};

const NotAuthorized = () => {
  return (
    <View style={{ flex: 1 }}>
      <EmptyState
        imageSource={images.empty.notAllowed}
        imageStyle={imageStyle}
        headerTextStyle={textStyles}
        subHeaderTextStyle={textStyles}
        headerText="You are not authorized"
        subHeaderText="You are not authorized to use this app. Contact us to become a Partner."
      />
    </View>
  );
};

export default NotAuthorized;
