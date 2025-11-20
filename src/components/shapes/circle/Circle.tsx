import { Pressable, StyleSheet } from 'react-native';

type CircleProps = {
  circleColor: string;
  circleBackgroundColor: string;
  circleWidth: number;
  circleHeight: number;
  circleCustomStyle?: object;
  circleChildren?: () => React.JSX.Element;
  onCirclePress?: () => void;
};

function Circle(props: Readonly<CircleProps>) {
  const stylesCircle = styles(props);
  const { onCirclePress, circleCustomStyle, circleChildren } = props;
  console.log(typeof onCirclePress);
  return (
    <Pressable
      style={[stylesCircle.circleFormation, circleCustomStyle]}
      onPress={onCirclePress}
    >
      {circleChildren}
    </Pressable>
  );
}

const styles = (props: CircleProps) => {
  const { circleColor, circleWidth, circleHeight, circleBackgroundColor } =
    props;
  return StyleSheet.create({
    circleFormation: {
      marginHorizontal: 3,
      width: circleWidth,
      height: circleHeight,
      borderWidth: 1,
      borderColor: circleColor,
      borderRadius: circleWidth / 2,
      backgroundColor: circleBackgroundColor,
    },
  });
};

export default Circle;
