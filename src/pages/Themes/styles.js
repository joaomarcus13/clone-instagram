import styled from 'styled-components';
import Icon from '../../style/icons';

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;
export const Body = styled.View`
  padding: 5px 20px;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const Check = styled.View`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border-width: ${({ check }) => (check ? '0' : '2px')};
  background-color: ${({ check, theme }) =>
    check ? theme.blueCheck : theme.bg};
  border-color: ${({ theme }) => theme.border};
`;

export const Icons = {
  Check: styled(Icon.Feather)`
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.bg};
  `,
};
