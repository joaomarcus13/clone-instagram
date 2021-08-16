import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/core';
import { nameIcons } from '../../style/icons';

export default function ListChat({ item, goToChat }) {
  return (
    <Styled.Container activeOpacity={1} onPress={goToChat}>
      <>
        <Styled.Image source={item.img} />
        <Styled.ViewText>
          <Styled.Text>{item.author}</Styled.Text>
          <Styled.TextSecondary numberOfLines={1} ellipsizeMode="tail">
            {item.description}
          </Styled.TextSecondary>
        </Styled.ViewText>
        <Styled.Icons.Camera name={nameIcons.camera} />
      </>
    </Styled.Container>
  );
}
