import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* position: relative; */
`;

export const View = styled.View`
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`;

export const Input = styled.TextInput`
  width: 65%;
`;

export const Image = styled.Image`
  height: 50px;
  width: 50px;
`;
