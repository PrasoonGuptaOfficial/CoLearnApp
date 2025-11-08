import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from '../../pages/Splash/SplashPage';
import SplashLoadingPage from '../../pages/Splash/SplashLoadingPage';
import RegisterLogin from '../../pages/RegisterLogin/RegisterLogin';

export type MainStackNavigatorList = {
  SplashPage: undefined;
  SplashLoadingPage: undefined;
  RegisterLoginPage: undefined;
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
      <MainStack.Screen name="RegisterLoginPage" component={RegisterLogin} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
