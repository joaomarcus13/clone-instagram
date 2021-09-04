import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from '../../style/icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;
export const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Text = {
  Header: styled.Text`
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  `,
};

export const ViewProfile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 45%;
`;

export const Content = styled.View`
  flex: 1;
`;
export const Footer = styled.View`
  height: 60px;
`;

export const Icons = {
  Back: styled(AntDesign)`
    font-size: 25px;
    color: ${({ theme }) => theme.icon};
  `,
  Phone: styled(Icon.Feather)`
    font-size: 22px;
    color: ${({ theme }) => theme.icon};
  `,
  Video: styled(Icon.Ionicons)`
    font-size: 28px;
    color: ${({ theme }) => theme.icon};
  `,
};
