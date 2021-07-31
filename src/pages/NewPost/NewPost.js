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

export default function NewPost() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => <ListChat item={item} />;
  return (
    <Styled.Container>
      <Styled.Header>
        <Text style={{ color: 'white' }}>New Post</Text>
      </Styled.Header>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
