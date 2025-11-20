import { StyleSheet, View } from 'react-native';

function VerticalLine() {
    return (
        <View style={styles.line} />
    )
}

const styles = StyleSheet.create({
    line: {
        width: 1,
        height: 14,
        borderWidth: 1,
        borderColor: '#000000'
    }
})

export default VerticalLine;