import React, { useEffect, useRef, Platform } from 'react';
import {
  FlatList,
  View,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';

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
const PESPECTIVE = 1.7;
const TR_POSITION = 1.5;

export default function Stories({ route }) {
  const { data } = route.params;
  const renderStory = ({ item }) => <Story data={item} />;

  const _scrollInterpolator = (index, carouselProps) => {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  };

  const _animatedStyles = (i, scrollX, carouselProps) => {
    let pageX = 0;

    let opacity = scrollX.interpolate({
      inputRange: [
        (pageX - width) / width,
        (pageX - width + 10) / width,
        pageX / width,
        (pageX + width - 250) / width,
        (pageX + width) / width,
      ],
      outputRange: [0, 0.6, 1, 0.6, 0],
      extrapolate: 'clamp',
    });

    return {
      transform: [
        {
          perspective: width,
        },
        {
          translateX: scrollX.interpolate({
            inputRange: [
              pageX - width,
              pageX - width + 0.1,
              pageX,
              pageX + width - 0.1,
              pageX + width,
            ],
            outputRange: [
              -width - 1,
              (-width - 1) / PESPECTIVE,
              0,
              (width + 1) / PESPECTIVE,
              +width + 1,
            ],
          }),
        },
        {
          rotateY: scrollX.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: ['-60deg', '0deg', '60deg'],
            extrapolate: 'clamp',
          }),
        },
        // {
        //   translateX: scrollX.interpolate({
        //     inputRange: [
        //       (pageX - width) / width,
        //       (pageX - width + 0.1) / width,
        //       pageX / width,
        //       (pageX + width - 0.1) / width,
        //       (pageX + width) / width,
        //     ],
        //     outputRange: [
        //       -width - 1,
        //       (-width - 1) / PESPECTIVE,
        //       0,
        //       (width + 1) / PESPECTIVE,
        //       +width + 1,
        //     ],
        //     extrapolate: 'clamp',
        //   }),
        // },
      ],
      opacity: opacity,
    };
  };

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
        // layout={'tinder'}
        scrollInterpolator={_scrollInterpolator}
        slideInterpolatedStyle={_animatedStyles}
        // ref={this.carouselRef}
        data={data}
        renderItem={renderStory}
        sliderWidth={width}
        itemWidth={width}
      />
    </GStyled.Container>
  );
}
