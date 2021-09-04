import React from 'react';
import testeimg from '../../assets/images/a.jpg';
import Spinner from '../Loading/Loading';
import * as Styled from './styles';
import * as GStyled from '../../style/global';
import { useSelector } from 'react-redux';

export default function ModalSendPost({ image, useCaption }) {
  const { loading, msg } = useSelector((state) => state.application);

  return (
    <>
      {loading && <Spinner text={msg} />}
      <Styled.Container>
        <Styled.View>
          <GStyled.Avatar size={40} source={testeimg} />
          <Styled.Input
            onChangeText={(text) => useCaption.setCaption(text)}
            defaultValue={useCaption.caption}
            placeholder="Write a caption..."
            placeholderTextColor={'#d8d8d8'}
          />
          <Styled.Image
            source={{
              uri: `data:image/jpg;base64,${image}`,
            }}
          />
        </Styled.View>
      </Styled.Container>
    </>
  );
}
