import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity as Touch } from 'react-native';
import { nameIcons } from '../../style/icons';
import * as Styled from './styles';

export default function HeaderBack({ text }) {
  const navigation = useNavigation();
  return (
    <Styled.Header>
      <Styled.Button
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Styled.Icons.Back name={nameIcons.back} />
      </Styled.Button>
      <Styled.TextHeader>{text}</Styled.TextHeader>
    </Styled.Header>
  );
}
