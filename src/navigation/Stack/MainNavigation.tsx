import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from '../../pages/Splash/SplashPage';

const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="SplashPage" component={SplashPage} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
