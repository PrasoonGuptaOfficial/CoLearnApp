import { Pressable, StyleSheet } from 'react-native';

type CircleProps = {
  circleColor: string;
  circleWidth: number;
  circleHeight: number;
  onCirclePress?: () => void;
};

function Circle(props: Readonly<CircleProps>) {
  const stylesCircle = styles(props);
  const {onCirclePress} = props;
  console.log(typeof onCirclePress);
  return <Pressable style={stylesCircle.circleFormation} onPress={onCirclePress} />;
}

const styles = (props: CircleProps) => {
  const { circleColor, circleWidth, circleHeight } = props;
  return StyleSheet.create({
    circleFormation: {
      marginHorizontal: 3,
      width: circleWidth,
      height: circleHeight,
      borderWidth: 1,
      borderColor: circleColor,
      borderRadius: circleWidth / 2,
      backgroundColor: circleColor,
    },
  });
};

export default Circle;
