import React from 'react';
import { TouchableWithoutFeedback as Touch } from 'react-native';
import * as Styled from './styles';
// import logo from '../../assets/icons/instagram-logo-white.png';
import { icons } from '../../style/icons';
import { useNavigation } from '@react-navigation/core';
import { nameIcons } from '../../style/icons';
import { useSelector } from 'react-redux';

export default function HeaderComponent() {
  const navigation = useNavigation();
  const theme = useSelector((state) =>
    state.application.darkTheme ? 'dark' : 'light'
  );

  return (
    <Styled.Header>
      <Styled.Logo source={icons[theme].logoInstagram} />

      <Styled.AreaIcons>
        <Touch
          onPress={() => {
            navigation.navigate('NewPost');
          }}
        >
          <Styled.Icons.AddPost name={nameIcons.addPost} />
        </Touch>
        <Touch
          onPress={() => {
            navigation.navigate('Activity');
          }}
        >
          <Styled.Icons.Activity name={nameIcons.heart} />
        </Touch>
        <Touch
          onPress={() => {
            navigation.navigate('StackChat');
          }}
        >
          <Styled.Icons.Message name={nameIcons.message2} />
        </Touch>
      </Styled.AreaIcons>
    </Styled.Header>
  );
}
