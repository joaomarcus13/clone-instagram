import styled from 'styled-components/native';
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
export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 20px;
  width: 50%;
`;

export const Icons = {
  Back: styled(Icon.AntDesign)`
    font-size: 25px;
    color: ${({ theme }) => theme.icon};
  `,
  Video: styled(Icon.Ionicons)`
    font-size: 28px;
    color: ${({ theme }) => theme.icon};
  `,
  Message: styled(Icon.Entypo)`
    font-size: 21px;
    color: ${({ theme }) => theme.icon};
  `,
};
