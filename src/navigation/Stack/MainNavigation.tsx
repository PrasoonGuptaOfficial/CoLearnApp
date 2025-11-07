import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from '../../pages/Splash/SplashPage';
import SplashLoadingPage from '../../pages/Splash/SplashLoadingPage';

export type MainStackNavigatorList = {
  SplashPage: undefined;
  SplashLoadingPage: undefined;
};

const MainStack = createStackNavigator<MainStackNavigatorList>();

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="SplashPage" component={SplashPage} />
      <MainStack.Screen
        name="SplashLoadingPage"
        component={SplashLoadingPage}
      />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
