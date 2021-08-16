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
import { data } from '../../util/datateste';
import ListChat from '../../components/ListChat/ListChat';
import * as Styled from './styles';
import * as GStyled from '../../style/global';
import { useNavigation } from '@react-navigation/native';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import { logout } from '../../store/actions/user';
import { useDispatch } from 'react-redux';

export default function Settings() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <GStyled.Container>
      <HeaderBack text="Settings" />
      <Search />
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: 'white' }}>logout</Text>
      </TouchableOpacity>
    </GStyled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
