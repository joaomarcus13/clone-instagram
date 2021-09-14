import React, { useRef, useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import { toRadians } from '../../util/functions';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import NavStories from '../../components/NavStories/NavStories';
import * as Styled from './styles';
import * as GStyled from '../../style/global';
import { useSelector } from 'react-redux';
const width = Dimensions.get('screen').width;
const POSITION = Platform.OS === 'ios' ? 2 : 1.5;
const ZOOM = Math.sin(toRadians(65));
const MARGIN25 = (width - 320) / 31.3 + 7;
const MARGIN50 = (width - 320) / 23.5 + 13;
const MARGIN100 = (width - 320) / 47 + 5;

function ImageStory({ story, refCarousel }) {
  const [index, setIndex] = useState(0);

  return (
    <Styled.ContainerImage>
      <NavStories
        index={index}
        setIndex={setIndex}
        story={story}
        refCarousel={refCarousel}
      />
      <Styled.Image
        style={{ resizeMode: 'cover' }}
        source={{ uri: story[index].url }}
      />
    </Styled.ContainerImage>
  );
}

export default function Stories({ route }) {
  const refScroll = useRef(null);
  const renderStory = ({ item }) => (
    <ImageStory story={item} refCarousel={refScroll} />
  );

  const [index, setIndex] = useState(route.params.index);

  const stories = useSelector((state) => state.post.stories);

  const _scrollInterpolator = (idx, carouselProps) => {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, idx, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  };

  const _animatedStyles = (i, scrollX, carouselProps) => {
    return {
      transform: [
        {
          perspective: 2 * width,
        },
        {
          translateX: scrollX.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [width / POSITION, 0, -width / POSITION],
          }),
        },
        {
          rotateY: scrollX.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: ['-90deg', '0deg', '90deg'],
          }),
        },
        {
          scale: scrollX.interpolate({
            inputRange: [-1, -0.5, 0, 0.5, 1],
            outputRange: [1, ZOOM, 1, ZOOM, 1],
          }),
        },
        {
          translateX: scrollX.interpolate({
            inputRange: [-1, -0.75, -0.5, 0, 0.5, 0.75, 1],
            outputRange: [
              -width / POSITION + MARGIN100,
              (-width * ZOOM * 0.75) / POSITION + MARGIN25,
              (-width * ZOOM * 0.5) / POSITION + MARGIN50,
              0,
              (width * ZOOM * 0.5) / POSITION - MARGIN50,
              (width * ZOOM * 0.75) / POSITION - MARGIN25,
              width / POSITION - MARGIN100,
            ],
          }),
        },
      ],
      opacity: scrollX.interpolate({
        inputRange: [-1, -0.5, 0.5, 1],
        outputRange: [0.4, 1, 1, 0.4],
      }),
    };
  };

  return (
    <GStyled.Container>
      <Carousel
        ref={refScroll}
        scrollInterpolator={_scrollInterpolator}
        slideInterpolatedStyle={_animatedStyles}
        itemWidth={width}
        firstItem={index}
        keyExtractor={(item) => item[0].url}
        data={stories}
        renderItem={renderStory}
        sliderWidth={width}
      />
    </GStyled.Container>
  );
}
