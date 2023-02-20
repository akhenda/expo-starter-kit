import { StyleSheet, TouchableOpacity } from 'react-native';

import type { RootStackScreenProps } from '@src/navigation/navigators/RootNavigator';

import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: '#2e78b7',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'Not Found'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn&apos;t exist.</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.replace('App Stack', {
            params: { params: { params: { screen: 'TV Shows' }, screen: 'Series Stack' }, screen: 'Home Tabs' },
            screen: 'Home Stack',
          })
        }
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
