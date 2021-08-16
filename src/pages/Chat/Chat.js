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
import { nameIcons } from '../../style/icons';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
  const navigation = useNavigation();
  /////get navitation to drawer
  // console.log(navigation);
  const renderItem = ({ item }) => <ListChat item={item} goToChat={goToChat} />;
  function goToChat() {
    navigation.navigate('ChatScreen');
  }
  return (
    <Styled.Container>
      <Styled.Header>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
            // navigation.navigate('ChatScreen');
          }}
        >
          <Styled.Icons.Back name={nameIcons.back} />
        </TouchableWithoutFeedback>
        <Styled.TextHeader>Joaomarcus13</Styled.TextHeader>
        <Styled.Icons.Video name={nameIcons.video} />
        <Styled.Icons.Message name={nameIcons.message} />
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
