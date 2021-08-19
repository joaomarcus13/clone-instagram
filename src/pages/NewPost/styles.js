import styled from 'styled-components/native';
import Icon from '../../style/icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;
export const ContainerImage = styled.View`
  height: 60%;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Text = {
  Header: styled.Text`
    font-size: 20px;
    width: 60%;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  `,
  Footer: styled.Text`
    font-size: 18px;
    width: 60%;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  `,
};

export const Button = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Footer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top-color: ${({ theme }) => theme.borderSecondary};
  border-top-width: 1px;
`;

export const Icons = {
  Close: styled(Icon.AntDesign)`
    color: ${({ theme }) => theme.icon};
    font-size: 28px;
  `,
  Next: styled(Icon.AntDesign)`
    color: #0095f6;
    font-size: 28px;
  `,
  Galery: styled(Icon.Ionicons)`
    font-size: 35px;
    color: ${({ theme }) => theme.icon};
  `,
  Camera: styled(Icon.Ionicons)`
    font-size: 20px;
    color: ${({ theme }) => theme.icon};
  `,
  Check: styled(Icon.Feather)`
    font-size: 26px;
    color: #0095f6;
  `,
};

export const BG = styled.View`
  /* padding: 10px; */
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.border};
`;
