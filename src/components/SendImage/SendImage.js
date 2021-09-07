/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import * as Styled from './styles';
import Loading from '../Loading/Loading';
import testeimg from '../../assets/images/a.jpg';
import { base64 } from '../../util/functions';
import { TouchableWithoutFeedback } from 'react-native';
import { nameIcons } from '../../style/icons';
import { useSelector } from 'react-redux';

export default function ModalSendImage({ image, cancel, confirm }) {
  const { loading, msg } = useSelector((state) => state.application);

  return (
    <>
      {loading && <Loading text={msg} />}
      <Styled.Container>
        <Styled.Header>
          <TouchableWithoutFeedback onPress={cancel}>
            <Styled.Icons.Close name="close" />
          </TouchableWithoutFeedback>
          <Styled.Icons.Link name="link2" />
          <Styled.Icons.Download name="download" />
          <Styled.Icons.Sticker name={nameIcons.sticker} />
          <Styled.Icons.Draw name="draw" />
          <Styled.Icons.Letter name="format-letter-case" />
        </Styled.Header>
        <Image
          style={{ flex: 1, resizeMode: 'cover' }}
          source={{
            uri: base64(image),
          }}
        />
        <Styled.Footer>
          <Styled.ToStory>
            <Styled.Border>
              <Styled.ImageProfile source={testeimg} />
            </Styled.Border>
            <Styled.TextProfile>Your Story</Styled.TextProfile>
          </Styled.ToStory>
          <Styled.Button onPress={confirm}>
            <Styled.ButtonText>Send to</Styled.ButtonText>
            <Styled.Icons.ArrowRight name="keyboard-arrow-right" />
          </Styled.Button>
        </Styled.Footer>
      </Styled.Container>
    </>
  );
}
