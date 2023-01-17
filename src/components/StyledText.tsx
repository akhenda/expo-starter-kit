import { StyleSheet } from 'react-native';

import { Text, TextProps } from './Themed';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono',
  },
});

export default function MonoText({ style, ...rest }: TextProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Text {...rest} style={[style, styles.text]} />;
}
