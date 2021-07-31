import styled from 'styled-components/native';
import fbIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  align-items: center;
  justify-content: center;
  /* padding: 50px 20px; */
`;
export const ContainerComponent = styled.View`
  height: 60%;
  width: 85%;
  /* background-color: ${({ theme }) => theme.border}; */
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.Image`
  height: 50px;
  width: 50%;
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
export const TextButton = styled.Text`
  font-weight: bold;
  color: #768298;
`;

export const ViewInline = styled.View`
  flex-direction: row;
  align-items: center;
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

export const H1 = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.textSecondary};
`;
export const H2 = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.textSecondary};
`;
export const H2Bold = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

export const Line = styled.View`
  height: 1px;
  width: 100px;
  background-color: ${({ theme }) => theme.borderSecondary};
  margin: 0 10px;
`;

export const TextFacebook = styled.Text`
  color: #1a8ce5;
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
`;

export const Icons = {
  Facebook: styled(fbIcon)`
    font-size: 30px;
    color: #1a8ce5;
  `,
};
