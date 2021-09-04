import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as Styled from './styles';

export default function Spinner({ text }) {
  return (
    <Styled.Container>
      <Styled.Modal>
        <ActivityIndicator size="small" color="white" />
        <Styled.Text>{text}</Styled.Text>
      </Styled.Modal>
    </Styled.Container>
  );
}
