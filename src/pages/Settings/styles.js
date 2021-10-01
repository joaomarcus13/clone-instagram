import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';
import Icon from '../../style/icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;

export const Body = styled.View`
  padding: 5px 20px;
`;

export const Item = styled.TouchableOpacity`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Text = {
  H1: styled.Text`
    color: ${({ theme }) => theme.text};
    margin-left: 15px;
  `,
  Strong: styled.Text`
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    font-size: 16px;
  `,
  Blue: styled.Text`
    color: ${({ theme }) => theme.blueCheck};
    font-size: 16px;
  `,
};

export const Icons = {
  Add: styled(Icon.FontAwesome)`
    font-size: 25px;
    color: ${({ theme }) => theme.icon};
  `,
};
