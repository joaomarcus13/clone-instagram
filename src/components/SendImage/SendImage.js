import React from 'react';
import * as Styled from './styles';
import testeimg from '../../assets/images/a.jpg';
import { TouchableWithoutFeedback } from 'react-native';

export default function ModalSendImage({ image, cancel }) {
  return (
    <Styled.Container>
      <Styled.Header>
        <TouchableWithoutFeedback
          onPress={() => {
            cancel(null);
          }}
        >
          <Styled.Icons.Close name="close" />
        </TouchableWithoutFeedback>
        <Styled.Icons.Link name="link2" />
        <Styled.Icons.Download name="download" />
        <Styled.Icons.Sticker name="sticker-emoji" />
        <Styled.Icons.Draw name="draw" />
        <Styled.Icons.Letter name="format-letter-case" />
      </Styled.Header>
      <Styled.Image
        source={{
          uri: image,
        }}
      />
      <Styled.Footer>
        <Styled.ToStory>
          <Styled.Border>
            <Styled.ImageProfile source={testeimg} />
          </Styled.Border>
          <Styled.TextProfile>Your Story</Styled.TextProfile>
        </Styled.ToStory>
        <Styled.Button>
          <Styled.ButtonText>Send to</Styled.ButtonText>
          <Styled.Icons.ArrowRight name="keyboard-arrow-right" />
        </Styled.Button>
      </Styled.Footer>
    </Styled.Container>
  );
}
