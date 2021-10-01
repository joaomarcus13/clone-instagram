import React, { useState } from 'react';
import { Text } from 'react-native';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import * as GStyled from '../../style/global';
import * as Styled from './styles';
import { nameIcons } from '../../style/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/actions/application';

export default function Themes() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.application.darkTheme);

  return (
    <GStyled.Container>
      <HeaderBack text={'Set Theme'} />
      <Styled.Body>
        <Styled.Item
          onPress={() => {
            darkTheme && dispatch(toggleTheme());
          }}
        >
          <Styled.Text>Light</Styled.Text>
          <Styled.Check check={!darkTheme}>
            <Styled.Icons.Check name={nameIcons.check} />
          </Styled.Check>
        </Styled.Item>
        <Styled.Item
          onPress={() => {
            !darkTheme && dispatch(toggleTheme());
          }}
        >
          <Styled.Text>Dark</Styled.Text>
          <Styled.Check check={darkTheme}>
            <Styled.Icons.Check name={nameIcons.check} />
          </Styled.Check>
        </Styled.Item>
      </Styled.Body>
    </GStyled.Container>
  );
}
