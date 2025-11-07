import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Circle from '../../components/shapes/circle/Circle';
import MyButton from '../../components/reusable/cta/MyButton';

function SplashLoadingPage() {
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../../assets/images/splash/SplashScreenLoadingInitial.png')}
        style={styles.contentContainer}
      >
        <Text style={styles.mainHeaderText}>
          Peer-to-peer learning Experience.
        </Text>
        <View style={styles.paginationView}>
          <Circle circleColor="#D9D9D9" circleWidth={8} circleHeight={8} />
          <Circle circleColor="#FFC700" circleWidth={8} circleHeight={8} />
        </View>
        <MyButton
          myButtonStyle={[styles.paginationView, styles.ctaView]}
          myButtonTextStyle={styles.ctaText}
          myButtonText="Get Started"
          myButtonPress={() => {}}
        />
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
  ctaView: {
    width: 320,
    height: 48,
    borderWidth: 1,
    borderColor: '#FFC700',
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    padding: 10,
    bottom: 40,
  },
  ctaText: {
    textAlign: 'center',
    fontFamily: 'NotoSans-Medium',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 18,
    color: '#282828',
  },
});

export default SplashLoadingPage;
