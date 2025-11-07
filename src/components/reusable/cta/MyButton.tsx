import { Pressable, Text } from 'react-native';

type MyButtonProps = {
  myButtonStyle?: object;
  myButtonTextStyle?: object;
  myButtonText: string;
  myButtonPress: () => void;
};

function MyButton(props: Readonly<MyButtonProps>) {
  const { myButtonStyle, myButtonTextStyle, myButtonText, myButtonPress } =
    props;
  return (
    myButtonText && (
      <Pressable style={myButtonStyle} onPress={myButtonPress}>
        <Text style={myButtonTextStyle}>{myButtonText}</Text>
      </Pressable>
    )
  );
}

export default MyButton;
