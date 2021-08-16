import React from 'react';
import * as Styled from './styles';
import { TouchableWithoutFeedback as Touch } from 'react-native';
import teste from '../../assets/images/rm.jpg';
// import Logo from '../../assets/icons/plus-circle-solid.svg';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/icons/2053433.png';

export default function AddStory() {
  const navigation = useNavigation();
  return (
    <Styled.Container>
      <Touch
        onPress={() => {
          navigation.navigate('Camera');
        }}
      >
        <Styled.Border>
          <Styled.Image source={teste} />
        </Styled.Border>
      </Touch>
      <Styled.BorderIcon>
        <Styled.IconAdd source={logo} />
      </Styled.BorderIcon>

      <Styled.Text>joaomarcus13</Styled.Text>
    </Styled.Container>
  );
}
