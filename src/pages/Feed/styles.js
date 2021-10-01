import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;

export const ScrollView = styled.ScrollView`
  border-bottom-color: ${({ theme }) => theme.borderSecondary};
  border-bottom-width: 0.3px;
`;
