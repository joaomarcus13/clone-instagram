import React from 'react';
import { TouchableWithoutFeedback as Touch } from 'react-native';
import * as Styled from './styles';
import logo from '../../assets/icons/instagram-logo-white.png';
import { useNavigation } from '@react-navigation/native';

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
          <Styled.IconAddPost name="plus-square-o" />
        </Touch>
        <Touch
          onPress={() => {
            navigation.navigate('Activity');
          }}
        >
          <Styled.IconActivity name="hearto" />
        </Touch>
        <Touch
          onPress={() => {
            navigation.navigate('Chat');
          }}
        >
          <Styled.IconMessage name="message-circle" />
        </Touch>
      </Styled.AreaIcons>
    </Styled.Header>
  );
}
