import React, { useState } from 'react';
import testeimg from '../../assets/images/a.jpg';
import * as Styled from './styles';
import * as GStyled from '../../style/global';

export default function ModalSendPost({ image, cancel, confirm, useCaption }) {
  return (
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
  );
}
