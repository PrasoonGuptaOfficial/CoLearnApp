import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function SplashPage() {
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default SplashPage;
