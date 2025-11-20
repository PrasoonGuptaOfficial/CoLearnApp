import { Animated, StyleSheet, Text, View } from 'react-native';
import Circle from '../shapes/circle/Circle';
import { useEffect, useRef } from 'react';

function IndianFlag() {
  const waveAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(waveAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [waveAnim]);
  const skew = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['5deg', '-15deg'],
  });
  const transpolateY = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -6],
  });
  const circleChildren = () => {
    return <Text style={styles.amblemSymbol}>*</Text>;
  };
  return (
    <Animated.View
      style={[
        styles.boundary,
        { transform: [{ skewX: skew }, { translateY: transpolateY }] },
      ]}
    >
      <View style={styles.saffronStripe} />
      <View style={styles.whiteStripe}>
        <Circle
          circleBackgroundColor="#FFFFFF"
          circleColor="#000080"
          circleHeight={7}
          circleWidth={7}
          circleCustomStyle={styles.amblemView}
          circleChildren={circleChildren}
        />
      </View>
      <View style={styles.greenStripe} />
      <View />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  boundary: {
    width: 32,
    height: 26,
    borderWidth: 1,
    borderColor: '#e0dedeff',
    marginHorizontal: 5,
  },
  saffronStripe: {
    width: 30,
    height: 8,
    borderWidth: 1,
    borderColor: '#FF9933',
    backgroundColor: '#FF9933',
  },
  whiteStripe: {
    width: 30,
    height: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  amblemView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 0,
    padding: 0,
  },
  amblemSymbol: {
    fontSize: 6,
    alignSelf: 'center',
    color: '#000080',
  },
  greenStripe: {
    width: 30,
    height: 8,
    borderWidth: 1,
    borderColor: '#138808',
    backgroundColor: '#138808',
  },
});

export default IndianFlag;
