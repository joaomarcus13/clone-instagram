import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as Styled from './styles';

export default function Loading() {
  return (
    <Styled.Container>
      <ActivityIndicator size="large" color="white" />
    </Styled.Container>
  );
}
