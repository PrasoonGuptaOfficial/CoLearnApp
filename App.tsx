import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer} edges={['top']}>
        <StatusBar barStyle="light-content" />
        <View style={styles.contentContainer}>
          <Text>App</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default App;
