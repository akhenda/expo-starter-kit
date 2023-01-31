import { StyleSheet } from 'react-native';

import { Text, TextProps } from './Themed';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono',
  },
});

export default function MonoText({ style, ...rest }: TextProps) {
  return <Text {...rest} style={[style, styles.text]} />;
}
