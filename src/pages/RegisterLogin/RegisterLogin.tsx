import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollRowDataFirst,
  ScrollRowDataSecond,
} from '../../utils/constants/RegisterLoginCard/RegisterLoginCardData';
import MyCarouselCard from '../../components/reusable/carouselCard/MyCarouselCard';

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

const { height } = Dimensions.get('window');

function RegisterLogin() {
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <FlatList
          data={ScrollRowDataFirst}
          horizontal={true}
          renderItem={LoginScrollableRenderItemOne}
          keyExtractor={item => item?.id?.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlistContainerStyle}
        />
        <FlatList
          data={ScrollRowDataSecond}
          horizontal={true}
          renderItem={LoginScrollableRenderItemOne}
          keyExtractor={item => item?.id?.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlistContainerStyle}
        />
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
  },
  flatlistContainerStyle: {
    maxHeight: height * 0.28,
  },
});

export default RegisterLogin;
