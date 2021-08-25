import React, { useEffect, useRef } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import * as Styled from './styles';
import * as GStyled from '../../style/global';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function Story({ data }) {
  // console.log(data.url);
  return (
    // <ScrollView>
    <Image
      source={{ uri: data.url }}
      style={{ height: height, width: width, resizeMode: 'center' }}
    />
    // </ScrollView>
  );
}

export default function Stories({ route }) {
  const { data } = route.params;

  const refCarrousel = useRef(null);

  const renderStory = ({ item }) => <Story data={item} />;
  return (
    <GStyled.Container>
      {/* <FlatList
        data={data}
        renderItem={renderStory}
        keyExtractor={(item) => item.url}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      /> */}
      {/* <ScrollView
        horizontal={true}
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {data.map((e) => (
          <Animated.View key={e.url}>
            <Image
              source={{ uri: e.url }}
              style={{ height: height, width: width, resizeMode: 'center' }}
            />
          </Animated.View>
        ))}
      </ScrollView> */}
      <Carousel
        layout={'tinder'}
        // ref={this.carouselRef}
        data={data}
        renderItem={renderStory}
        sliderWidth={width}
        itemWidth={width}
      />
    </GStyled.Container>
  );
}
