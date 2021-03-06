import styled from 'styled-components/native';

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
