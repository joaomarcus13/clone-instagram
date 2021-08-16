import React from 'react';
import { TouchableWithoutFeedback as Touch } from 'react-native';
import * as Styled from './styles';
import logo from '../../assets/icons/instagram-logo-white.png';
import { useNavigation } from '@react-navigation/native';
import { nameIcons } from '../../style/icons';

export default function HeaderComponent() {
  const navigation = useNavigation();
  return (
    <Styled.Header>
      <Styled.Logo source={logo} />

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
