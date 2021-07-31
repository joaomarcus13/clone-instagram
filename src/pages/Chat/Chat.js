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
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => <ListChat item={item} />;
  return (
    <Styled.Container>
      <Styled.Header>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Styled.BackIcon name="arrowleft" />
        </TouchableWithoutFeedback>
        <Styled.TextHeader>Joaomarcus13</Styled.TextHeader>
        <Styled.VideoIcon name="videocam-outline" />
        <Styled.NewMessageIcon name="new-message" />
      </Styled.Header>
      <Search />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
