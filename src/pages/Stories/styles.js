import styled from 'styled-components';
import { Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('window').height;

export const ContainerImage = styled.View`
  margin-top: 15px;
`;

export const Image = styled.Image`
  height: ${height - 40}px;
  width: ${width}px;
  border-radius: 8px;
`;
