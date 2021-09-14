import React from 'react';
import * as Styled from './styles';
import { TouchableWithoutFeedback as Touch } from 'react-native';
import teste from '../../assets/images/rm.jpg';
// import Logo from '../../assets/icons/plus-circle-solid.svg';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/icons/2053433.png';
import { useSelector } from 'react-redux';

export default function AddStory() {
  const navigation = useNavigation();

  const { photoURL } = useSelector((state) => state.user);

  return (
    <Styled.Container>
      <Touch
        onPress={() => {
          navigation.navigate('NewStory');
        }}
      >
        <Styled.Border>
          <Styled.Image source={{ uri: photoURL }} />
        </Styled.Border>
      </Touch>
      <Styled.BorderIcon>
        <Styled.IconAdd source={logo} />
      </Styled.BorderIcon>

      <Styled.Text>Your Story</Styled.Text>
    </Styled.Container>
  );
}
