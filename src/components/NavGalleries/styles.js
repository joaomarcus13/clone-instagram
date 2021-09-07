import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const GalleriesView = styled.View`
  width: 100%;
  height: 50px;

  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Gallery = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Indicator = styled(Animated.View)`
  height: 1px;
  background-color: ${({ theme }) => theme.text};
`;
