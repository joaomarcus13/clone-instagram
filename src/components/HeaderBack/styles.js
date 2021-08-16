import styled from 'styled-components';
import Icon from '../../style/icons';

export const Header = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 100%;
  margin: 0 25px;
  align-items: center;
  justify-content: center;
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
};
