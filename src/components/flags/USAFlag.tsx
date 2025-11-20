import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

function USAFlag() {
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
  return (
    <Animated.View
      style={[
        styles.boundary,
        { transform: [{ skewX: skew }, { translateY: transpolateY }] },
      ]}
    >
      <View style={styles.rowView}>
        <View style={styles.starsBoundary}>
          <View style={styles.rowStars}>
            <Text style={styles.symbolSign}>*</Text>
            <Text style={styles.symbolSign}>*</Text>
          </View>
        </View>
        <View>
          <View style={styles.rectangleAgain} />
          <View style={styles.rectangleAgain} />
        </View>
      </View>
      <View style={styles.rectangle} />
      <View style={styles.rectangle} />
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
  rowView: {
    flexDirection: 'row',
  },
  starsBoundary: {
    width: 16,
    height: 13,
    borderWidth: 1,
    borderColor: '#0A3161',
    backgroundColor: '#0A3161',
  },
  rowStars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbolSign: {
    fontSize: 10,
    padding: 0,
    margin: 0,
    color: '#FFFFFF',
  },
  rectangle: {
    width: 30,
    height: 4,
    borderWidth: 1,
    marginBottom: 2,
    borderColor: '#B31942',
    backgroundColor: '#B31942',
  },
  rectangleAgain: {
    width: 14,
    height: 4,
    borderWidth: 1,
    marginBottom: 2,
    borderColor: '#B31942',
    backgroundColor: '#B31942',
  },
});

export default USAFlag;
