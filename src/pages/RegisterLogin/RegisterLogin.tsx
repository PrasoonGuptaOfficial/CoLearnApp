import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollRowDataFirst,
  ScrollRowDataSecond,
} from '../../utils/constants/RegisterLoginCard/RegisterLoginCardData';
import MyCarouselCard from '../../components/reusable/carouselCard/MyCarouselCard';
import AutoScrollableCards from '../../components/custom/autoScrollableCards/AutoScrollableCards';
import RegisterLoginComponent from '../../components/pagesComponents/RegisterLoginComponent/RegisterLoginComponent';

type LoginScrollableRenderItemType = {
  id: number;
  scrollableImage: number;
};

const LoginScrollableRenderItemOne = ({
  item,
}: {
  item: LoginScrollableRenderItemType;
}) => {
  return <MyCarouselCard carouselCardImage={item?.scrollableImage} />;
};

function RegisterLogin() {
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <AutoScrollableCards
          scrollableData={ScrollRowDataFirst}
          scrollableRenderItem={LoginScrollableRenderItemOne}
          scrollableTimeInterval={500}
        />
        <AutoScrollableCards
          scrollableData={ScrollRowDataSecond}
          scrollableRenderItem={LoginScrollableRenderItemOne}
          scrollableTimeInterval={500}
        />
      </View>
      <RegisterLoginComponent />
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
    backgroundColor: '#000000F2',
    opacity: 0.2,
  },
});

export default RegisterLogin;
