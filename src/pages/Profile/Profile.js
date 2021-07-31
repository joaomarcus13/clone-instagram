import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as Styled from './styles';
import testeImg from '../../assets/images/615340.jpg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const myProfile = true;
const following = false;

export default function Explorer() {
  const navigation = useNavigation();
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.TextHeader>joaomarcus13</Styled.TextHeader>
        <Styled.IconsHeader>
          <Styled.AddPost name="plus-square-o" />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Styled.Menu name="menu" />
          </TouchableWithoutFeedback>
        </Styled.IconsHeader>
      </Styled.Header>
      <Styled.Information>
        <Styled.ViewImageProfile>
          <Styled.ImageProfile source={testeImg} />
          <Styled.ViewNumbers>
            <Styled.ViewEachNumbers>
              <Styled.H1>22</Styled.H1>
              <Styled.H2>Posts</Styled.H2>
            </Styled.ViewEachNumbers>
            <Styled.ViewEachNumbers>
              <Styled.H1>380</Styled.H1>
              <Styled.H2>Followers</Styled.H2>
            </Styled.ViewEachNumbers>
            <Styled.ViewEachNumbers>
              <Styled.H1>614</Styled.H1>
              <Styled.H2>Following</Styled.H2>
            </Styled.ViewEachNumbers>
          </Styled.ViewNumbers>
        </Styled.ViewImageProfile>
        <Styled.TextProfile>Joao Marcos</Styled.TextProfile>
      </Styled.Information>

      {myProfile ? (
        <Styled.ViewButton>
          <Styled.Button bg={true}>
            <Styled.TextEditProfile>Edit Profile</Styled.TextEditProfile>
          </Styled.Button>
        </Styled.ViewButton>
      ) : (
        <Styled.ViewButton>
          <Styled.Button bg={following}>
            <Styled.TextEditProfile>
              {following ? 'following' : 'follow'}
            </Styled.TextEditProfile>
          </Styled.Button>
          <Styled.Button bg={true}>
            <Styled.TextEditProfile>message</Styled.TextEditProfile>
          </Styled.Button>
        </Styled.ViewButton>
      )}
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});