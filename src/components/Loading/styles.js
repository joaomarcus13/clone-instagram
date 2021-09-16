import styled from 'styled-components';
import { Dimensions } from 'react-native';
const height = Dimensions.get('screen').height;

export const Container = styled.View`
  flex: 1;
  height: ${height};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);

  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Modal = styled.View`
  height: 50px;
  width: 150px;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.modal};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
`;
