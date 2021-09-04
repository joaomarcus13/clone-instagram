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
import { useSelector } from 'react-redux';
import { nameIcons } from '../../style/icons';
import { useEffect } from 'react';

const myProfile = true;
const following = false;

export default function Profile() {
  const navigation = useNavigation();
  const username = useSelector((state) => {
    const email = state.user?.email;
    return email ? email.substr(0, email.indexOf('@')) : '';
  });
  const name = useSelector((state) => state.user?.displayName || '');
  const photoURL = useSelector((state) => state.user?.photoURL);
  console.log(photoURL);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Text.Header>{username}</Styled.Text.Header>
        <Styled.IconsHeader>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('NewPost');
            }}
          >
            <Styled.Icons.AddPost name={nameIcons.addPost} />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Styled.Icons.Menu name="menu" />
          </TouchableWithoutFeedback>
        </Styled.IconsHeader>
      </Styled.Header>
      <Styled.Information>
        <Styled.ViewImageProfile>
          {photoURL ? (
            <Styled.ImageProfile source={{ uri: photoURL }} />
          ) : (
            <Styled.ImageProfile source={testeImg} />
          )}

          <Styled.ViewNumbers>
            <Styled.ViewEachNumbers>
              <Styled.Text.H1>22</Styled.Text.H1>
              <Styled.Text.H2>Posts</Styled.Text.H2>
            </Styled.ViewEachNumbers>
            <Styled.ViewEachNumbers>
              <Styled.Text.H1>380</Styled.Text.H1>
              <Styled.Text.H2>Followers</Styled.Text.H2>
            </Styled.ViewEachNumbers>
            <Styled.ViewEachNumbers>
              <Styled.Text.H1>614</Styled.Text.H1>
              <Styled.Text.H2>Following</Styled.Text.H2>
            </Styled.ViewEachNumbers>
          </Styled.ViewNumbers>
        </Styled.ViewImageProfile>
        <Styled.Text.Profile>{name}</Styled.Text.Profile>
      </Styled.Information>

      {myProfile ? (
        <Styled.ViewButton>
          <Styled.Button bg={true}>
            <Styled.Text.EditProfile>Edit Profile</Styled.Text.EditProfile>
          </Styled.Button>
        </Styled.ViewButton>
      ) : (
        <Styled.ViewButton>
          <Styled.Button bg={following}>
            <Styled.Text.EditProfile>
              {following ? 'following' : 'follow'}
            </Styled.Text.EditProfile>
          </Styled.Button>
          <Styled.Button bg={true}>
            <Styled.Text.EditProfile>message</Styled.Text.EditProfile>
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
