import { FlatList, Text } from 'react-native';
import { CountryCodeData } from '../../../utils/constants/CountryCode/CountryCodeData';
import IndianFlag from '../../flags/IndianFlag';
import USAFlag from '../../flags/USAFlag';

type CountryCodeDataType = {
  id: number;
  countryName: string;
  countryCode: string;
};

const countryRenderFlag = (countryName: string) => {
  switch (countryName) {
    case 'India':
      return <IndianFlag />;
    case 'USA':
      return <USAFlag />;
    default:
      return <IndianFlag />;
  }
};

const countryCodeRenderItem = ({ item }: { item: CountryCodeDataType }) => {
  return (
    <>
      <Text>{item?.countryCode}</Text>
      {countryRenderFlag(item?.countryName)}
    </>
  );
};

function CountryCodeMapping() {
  return (
    <FlatList
      data={CountryCodeData}
      keyExtractor={item => item?.id?.toString()}
      renderItem={countryCodeRenderItem}
    />
  );
}

export default CountryCodeMapping;
