import styled from 'styled-components/native';
import Logo from '../../assets/icons/profile.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  align-items: center;
`;
export const ContainerComponent = styled.View`
  height: 50%;
  width: 85%;
  top: 18%;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  height: 115px;
  justify-content: space-between;
`;

export const LogoUser = styled(Logo)`
  margin-bottom: 35px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.bgInput};
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #152e5f;
`;

export const ViewInline = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  position: absolute;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top-color: ${({ theme }) => theme.borderSecondary};
  border-top-width: 1px;
  bottom: 0;
`;

export const Text = {
  H1: styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.textSecondary};
  `,
  H2: styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.textSecondary};
  `,
  H2Bold: styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.text};
  `,
  Button: styled.Text`
    font-weight: bold;
    color: #768298;
  `,
};

export const Line = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.borderSecondary};
  margin-bottom: 15px;
`;
