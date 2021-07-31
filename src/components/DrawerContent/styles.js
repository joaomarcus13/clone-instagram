import styled from 'styled-components/native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconAD from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  border-left-color: ${({ theme }) => theme.borderSecondary};
  border-left-width: 1px;
`;

export const Header = styled.View`
  height: 55px;
  border-bottom-color: ${({ theme }) => theme.borderSecondary};
  border-bottom-width: 1px;
  align-items: center;
  flex-direction: row;
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
`;

export const Items = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  height: 45px;
  border-top-color: ${({ theme }) => theme.borderSecondary};
  border-top-width: 1px;
`;

export const Icons = {
  Settings: styled(Octicons)`
    font-size: 22px;
    color: ${({ theme }) => theme.icon};
  `,
};
