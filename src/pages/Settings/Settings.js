import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Search from '../../components/Search/Search';

import * as Styled from './styles';
import * as GStyled from '../../style/global';

import HeaderBack from '../../components/HeaderBack/HeaderBack';
import { logout } from '../../store/actions/user';
import { useDispatch } from 'react-redux';
import { nameIcons } from '../../style/icons';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const dispatch = useDispatch();
  const navigator = useNavigation();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <GStyled.Container>
      <HeaderBack text="Settings" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search />
        <Styled.Body>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Follow and Invite Friends</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Notifications</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Privacy</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Security</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Ads</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Account</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Help</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>About</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item
            onPress={() => {
              navigator.navigate('Themes');
            }}
          >
            <Styled.Icons.Add name={nameIcons.galery3} />
            <Styled.Text.H1>Theme</Styled.Text.H1>
          </Styled.Item>
          <Styled.Item>
            <Styled.Text.Strong>Logins</Styled.Text.Strong>
          </Styled.Item>
          <Styled.Item>
            <Styled.Text.Blue>Add Account</Styled.Text.Blue>
          </Styled.Item>
          <Styled.Item onPress={handleLogout}>
            <Styled.Text.Blue>Log Out</Styled.Text.Blue>
          </Styled.Item>
        </Styled.Body>
      </ScrollView>
    </GStyled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
