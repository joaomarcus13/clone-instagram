import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const Modal = styled.View`
  height: 30px;
  width: 50px;
  background-color: ${({ theme }) => theme.bg};
`;
