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
import { useNavigation } from '@react-navigation/native';
import { nameIcons } from '../../style/icons';
import imgtest from '../../assets/images/rm.jpg';
import TypeAreaChat from '../../components/TypeAreaChat/TypeAreaChat';
import * as Styled from './styles';
import * as GStyled from '../../style/global';

export default function ChatScreen({ item }) {
  const navigation = useNavigation();
  return (
    <Styled.Container>
      <Styled.Header>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
            // navigation.navigate('ChatScreen');
          }}
        >
          <Styled.Icons.Back name="arrowleft" />
        </TouchableWithoutFeedback>
        <Styled.ViewProfile>
          <GStyled.Avatar source={imgtest} size={30} />
          <Styled.Text.Header>Joaomarcus13</Styled.Text.Header>
        </Styled.ViewProfile>
        <Styled.Icons.Phone name={nameIcons.phone} />
        <Styled.Icons.Video name={nameIcons.video} />
      </Styled.Header>
      <Styled.Content />
      <Styled.Footer>
        <TypeAreaChat />
      </Styled.Footer>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
