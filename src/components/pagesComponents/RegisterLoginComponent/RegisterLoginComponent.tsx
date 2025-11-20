import { Dimensions, StyleSheet, Text, View } from 'react-native';
import IndianFlag from '../../flags/IndianFlag';
import USAFlag from '../../flags/USAFlag';
import CountryCodeMapping from '../../custom/countryCodeMapping/CountryCodeMapping';

const { width, height } = Dimensions.get('window');

function RegisterLoginComponent() {
  return (
    <View style={styles.accountView}>
      <Text style={styles.headerText}>Create your Account</Text>
      <View style={[styles.mobileNumberView, styles.mobileNumberDirectionInput]}>
        <Text>+91</Text>
        <IndianFlag />
        <USAFlag />
        <CountryCodeMapping />
        <Text>8708248058</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountView: {
    flex: 1,
    bottom: 100,
    width: width * 0.89,
    height: height * 0.42,
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
  },
  headerText: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  mobileNumberView: {
    width: width * 0.89,
    height: height * 0.05,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  mobileNumberDirectionInput: {
    flexDirection: 'row',
  }
});

export default RegisterLoginComponent;
