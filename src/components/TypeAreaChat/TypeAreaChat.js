import React, { useState } from 'react';
import { nameIcons } from '../../style/icons';
import * as Styled from './styles';
export default function TypeAreaChat() {
  const [text, setText] = useState('');

  return (
    <Styled.Container>
      <Styled.Gradient colors={['#1a8ce5', '#056cbd']}>
        {text ? <Styled.Icons.Search /> : <Styled.Icons.Camera />}
      </Styled.Gradient>
      <Styled.Input
        placeholder={'Message...'}
        onChangeText={(value) => {
          setText(value);
        }}
      />
      {text ? (
        <Styled.ButtonSend>
          <Styled.Text>Send</Styled.Text>
        </Styled.ButtonSend>
      ) : (
        <Styled.AreaIcons>
          <Styled.Icons.Mic name={nameIcons.mic} />
          <Styled.Icons.Galery name={nameIcons.galery3} />
          <Styled.Icons.Sticker name={nameIcons.sticker} />
        </Styled.AreaIcons>
      )}
    </Styled.Container>
  );
}
