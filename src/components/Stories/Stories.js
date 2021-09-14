import React from 'react';
import * as Styled from './styles';
import { TouchableOpacity } from 'react-native';
import { linearGradient } from '../../style/global';

import { photoProfileDefault } from '../../util/constants';

import { useNavigation } from '@react-navigation/native';

export default function Story({ data, index }) {
  const navigator = useNavigation();
  const { photoURL, name } = data[0].user;
  return (
    <Styled.Story>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigator.navigate('Story', { data, index });
        }}
      >
        <Styled.Gradient colors={linearGradient}>
          <Styled.Border>
            <Styled.StoryImg
              source={{
                uri: photoURL || photoProfileDefault,
              }}
            />
          </Styled.Border>
        </Styled.Gradient>
      </TouchableOpacity>
      <Styled.StoryText>{name}</Styled.StoryText>
    </Styled.Story>
  );
}
