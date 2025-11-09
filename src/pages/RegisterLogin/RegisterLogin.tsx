import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollRowDataFirst,
  ScrollRowDataSecond,
} from '../../utils/constants/RegisterLoginCard/RegisterLoginCardData';
import MyCarouselCard from '../../components/reusable/carouselCard/MyCarouselCard';
import AutoScrollableCards from '../../components/custom/autoScrollableCards/AutoScrollableCards';

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

const { width, height } = Dimensions.get('window');

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
      <View style={styles.accountView}>
        <Text style={{ color: 'white' }}>Check</Text>
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
    backgroundColor: '#000000F2',
    opacity: 0.2,
  },
  accountView: {
    flex: 1,
    bottom: 100,
    width: width * 0.89,
    height: height * 0.42,
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
  },
});

export default RegisterLogin;
