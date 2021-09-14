import styled from 'styled-components/native';
import Icon from '../../style/icons';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 55px;
  padding: 14px;
`;
export const HeaderContent = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`;
export const Perfil = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  /* margin: 0 12px 0 12px; */
  margin-right: 12px;
`;
export const AreaIcons = styled.View`
  flex-direction: row;
  /* background-color: red; */
  align-items: center;
  padding: 8px 14px;
`;
export const Icons = {
  Dots: styled(Icon.Feather)`
    margin-right: 5px;
    font-size: 20px;
    color: ${({ theme }) => theme.icon};
  `,
  Like: styled(Icon.AntDesign)`
    font-size: 23px;
    color: ${({ theme }) => theme.icon};
    margin-right: 14px;
  `,
  Comment: styled(Icon.Feather)`
    font-size: 25px;
    color: ${({ theme }) => theme.icon};
    margin-right: 14px;
  `,
  Share: styled(Icon.Feather)`
    font-size: 23px;
    color: ${({ theme }) => theme.icon};
  `,
  BookMark: styled(Icon.FontAwesome)`
    font-size: 25px;
    color: ${({ theme }) => theme.icon};
    margin-left: auto;
  `,
};

export const Text = {
  Flex: styled.Text`
    font-weight: 700;
    flex: 1;
    color: ${({ theme }) => theme.text};
  `,
  H1: styled.Text`
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin-right: 5px;
  `,
  H2: styled.Text`
    color: ${({ theme }) => theme.text};
  `,
  H3: styled.Text`
    color: ${({ theme }) => theme.textSecondary};
  `,
  H4: styled.Text`
    font-size: 10px;
    color: ${({ theme }) => theme.textSecondary};
    /* margin-top: 5px; */
  `,
};

export const Description = styled.View`
  padding: 0 14px;
`;
export const DescriptionText = styled.View`
  flex-direction: row;
  margin: 3px 0 5px 0;
`;

export const AddComment = styled.View`
  flex-direction: row;
  margin: 8px 0 5px 0;
`;

export const ImageComment = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

export const Input = styled.TextInput`
  height: 30px;
  padding: 0;
`;
