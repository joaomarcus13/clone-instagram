import styled from 'styled-components';
import { Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

export const Container = styled.View`
  flex: 1;
  width: ${width};
  background-color: red;
  align-items: flex-start;
`;
