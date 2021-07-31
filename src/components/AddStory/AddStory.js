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
    <Styled.Story>
      <Touch
        onPress={() => {
          navigation.navigate('Camera');
        }}
      >
        <Styled.Border>
          <Styled.StoryImg source={teste} />
        </Styled.Border>
      </Touch>
      <Styled.BorderIcon>
        <Styled.IconAdd source={logo} />
      </Styled.BorderIcon>

      <Styled.StoryText>joaomarcus13</Styled.StoryText>
    </Styled.Story>
  );
}
