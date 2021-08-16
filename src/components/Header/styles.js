import styled from 'styled-components/native';
import Icon from '../../style/icons';

export const Header = styled.View`
  height: 53px;
  background-color: ${({ theme }) => theme.bg};
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 120px;
  margin-left: 10px;
  margin-right: auto;
`;

export const AreaIcons = styled.View`
  width: 160px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icons = {
  AddPost: styled(Icon.FontAwesome)`
    font-size: 26px;
    color: ${({ theme }) => theme.icon};
  `,
  Activity: styled(Icon.AntDesign)`
    font-size: 23px;
    color: ${({ theme }) => theme.icon};
  `,
  Message: styled(Icon.Feather)`
    font-size: 25px;
    color: ${({ theme }) => theme.icon};
  `,
};
