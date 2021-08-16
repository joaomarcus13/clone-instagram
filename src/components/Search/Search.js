import React from 'react';
import * as Styled from './styles';

export default function Search() {
  return (
    <Styled.Container>
      <Styled.Input placeholder="Search" selectionColor={'gray'} />
      <Styled.Icons.Search name="search" />
    </Styled.Container>
  );
}
