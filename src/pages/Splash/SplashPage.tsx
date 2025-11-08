import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Circle from '../../components/shapes/circle/Circle';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackNavigatorList } from '../../navigation/Stack/MainNavigation';
import { useEffect } from 'react';

type SplashPageNavigationType = StackNavigationProp<
  MainStackNavigatorList,
  'SplashPage'
>;

type SpalshPageNavigationProp = {
  navigation: SplashPageNavigationType;
};

function SplashPage(props: Readonly<SpalshPageNavigationProp>) {
  const { navigation } = props;
  useEffect(() => {
    const splashNavigationRef = setTimeout(() => {
      onSplashLoadingPageHandler();
    }, 1000);
    return () => {
      clearTimeout(splashNavigationRef);
    };
  });
  const onSplashLoadingPageHandler = () => {
    navigation.navigate('SplashLoadingPage');
  };
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../../assets/images/splash/SplashScreenInitial.png')}
        style={styles.contentContainer}
      >
        <Text style={styles.mainHeaderText}>
          Match Making App for Study Buddies
        </Text>
        <View style={styles.paginationView}>
          <Circle
            circleColor="#FFC700"
            circleWidth={8}
            circleHeight={8}
            onCirclePress={onSplashLoadingPageHandler}
          />
          <Circle circleColor="#D9D9D9" circleWidth={8} circleHeight={8} />
        </View>
      </ImageBackground>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeaderText: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    color: '#F1F1F1',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 30,
    letterSpacing: -2,
  },
  paginationView: {
    flex: 1,
    position: 'absolute',
    bottom: 150,
    flexDirection: 'row',
  },
});

export default SplashPage;
