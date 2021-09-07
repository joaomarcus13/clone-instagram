import React, { useRef } from 'react';
import * as Styled from './styles';
import { ScrollView, Animated, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

export default function NavGalleries({ tabs }) {
  const scroll = useRef(null);
  const indicator = new Animated.Value(0);

  function moveIndicator(to) {
    Animated.timing(indicator, {
      toValue: to,
      duration: 0,
      useNativeDriver: false,
    }).start();
  }

  function handleNav(index) {
    scroll.current?.scrollTo({ x: width * index });
    console.log(scroll.current);
  }

  return (
    <Styled.Container>
      <Styled.GalleriesView>
        {tabs.map((e, i) => (
          <Styled.Gallery
            key={i.toString()}
            onPress={() => {
              handleNav(i);
            }}
          >
            {e.icon}
          </Styled.Gallery>
        ))}
      </Styled.GalleriesView>
      <Styled.Indicator
        style={{
          width: width / tabs.length,
          transform: [
            {
              translateX: indicator,
            },
          ],
        }}
      />

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scroll}
        onScroll={(e) => {
          const { contentOffset } = e.nativeEvent;
          moveIndicator(contentOffset.x / tabs.length);
        }}
      >
        {tabs.map((e) => e.component)}
      </ScrollView>
    </Styled.Container>
  );
}
