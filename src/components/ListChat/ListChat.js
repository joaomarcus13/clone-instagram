import React from 'react';
import { Text } from 'react-native';
import * as Styled from './styles';

export default function ListChat({ item }) {
  return (
    <Styled.Container>
      <Styled.Image source={item.img} />
      <Styled.ViewText>
        <Styled.Text>{item.author}</Styled.Text>
        <Styled.TextSecondary numberOfLines={1} ellipsizeMode="tail">
          {item.description}
        </Styled.TextSecondary>
      </Styled.ViewText>
      <Styled.CameraIcon name="camera-outline" />
    </Styled.Container>
  );
}
