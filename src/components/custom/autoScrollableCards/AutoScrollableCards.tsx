import { useEffect, useRef } from 'react';
import { Dimensions, FlatList, ListRenderItem, StyleSheet } from 'react-native';

type LoginScrollableRenderItemType = {
  id: number;
  scrollableImage: number;
};

type AutoScrollableCardsType = {
  scrollableData: LoginScrollableRenderItemType[];
  scrollableRenderItem: ListRenderItem<LoginScrollableRenderItemType>;
  scrollableTimeInterval: number;
};

const { height } = Dimensions.get('window');

function AutoScrollableCards(props: Readonly<AutoScrollableCardsType>) {
  const { scrollableData, scrollableRenderItem, scrollableTimeInterval } =
    props;
  const scrollableListRef = useRef<FlatList>(null);
  const scrollableCurrentIndex = useRef(0);
  useEffect(() => {
    const scrollableTimer = setInterval(() => {
      scrollableCurrentIndex.current =
        scrollableCurrentIndex.current < scrollableData.length - 1
          ? scrollableCurrentIndex.current + 1
          : 0;
      scrollableListRef.current?.scrollToIndex({
        index: scrollableCurrentIndex.current,
        animated: true,
      });
    }, scrollableTimeInterval);
    return () => {
      clearInterval(scrollableTimer);
    };
  }, [scrollableData, scrollableTimeInterval]);
  return (
    <FlatList
      ref={scrollableListRef}
      data={scrollableData}
      horizontal={true}
      pagingEnabled={true}
      renderItem={scrollableRenderItem}
      keyExtractor={item => item?.id?.toString()}
      showsHorizontalScrollIndicator={false}
      style={styles.flatlistContainerStyle}
    />
  );
}

const styles = StyleSheet.create({
  flatlistContainerStyle: {
    maxHeight: height * 0.28,
  },
});

export default AutoScrollableCards;
