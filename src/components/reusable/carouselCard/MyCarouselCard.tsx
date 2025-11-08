import { Dimensions, Image, StyleSheet, View } from 'react-native';

type CarouselCardImageType = {
  carouselCardImage: number;
};

const { width, height } = Dimensions.get('window');

function MyCarouselCard(props: Readonly<CarouselCardImageType>) {
  return (
    <View style={styles.carouselCardView}>
      <Image
        source={props?.carouselCardImage}
        style={styles.carouselCardImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselCardView: {
    width: width * 0.41,
    height: height * 0.28,
  },
  carouselCardImage: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#000000F2',
    borderRadius: 10,
  },
});

export default MyCarouselCard;
