import React, { useState } from 'react';
import * as Styled from './styles';
import { Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;
const widthStory = Math.floor((width * 96) / 100);
const height = Dimensions.get('window').height;

export default function NavStories({ index, setIndex, story, refCarousel }) {
  const widthBar = widthStory / story.length;
  const [bars, setBars] = useState(
    [...Array(story.length)].map((_, i) => (i === 0 ? widthBar : 0))
  );

  function nextImage() {
    if (story[index + 1]?.url) {
      setBars((state) => {
        let arr = [...state];
        arr[index + 1] = widthBar;
        return arr;
      });
      setIndex((state) => state + 1);
    } else {
      refCarousel.current.snapToNext();
    }
  }
  function prevImage() {
    if (story[index - 1]?.url) {
      setBars((state) => {
        let arr = [...state];
        const idx = arr[index] > 0 ? index : index - 1;
        arr[idx] = 0;
        return arr;
      });
      setIndex((state) => state - 1);
    } else {
      refCarousel.current.snapToPrev();
    }
  }

  return (
    <>
      <Styled.ViewProgress>
        {bars.map((e, i) => (
          <Styled.ProgressBar key={i.toString()} width={widthBar}>
            <Styled.Progress width={e} />
          </Styled.ProgressBar>
        ))}
      </Styled.ViewProgress>
      <Styled.NextStory onPress={nextImage} width={width / 2} height={height} />
      <Styled.PrevStory onPress={prevImage} width={width / 2} height={height} />
    </>
  );
}
