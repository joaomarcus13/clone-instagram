import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Search from '../../components/Search/Search';
import { data } from '../../util/datateste';
import ListChat from '../../components/ListChat/ListChat';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import * as GStyled from '../../style/global';
import HeaderBack from '../../components/HeaderBack/HeaderBack';

export default function Activity() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => <ListChat item={item} />;
  return (
    <GStyled.Container>
      {/* <Styled.Header>
        <Styled.TextHeader>Activity</Styled.TextHeader>
      </Styled.Header> */}
      <HeaderBack text="Activity" />
      <Search />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </GStyled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
