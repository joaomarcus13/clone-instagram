import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;

export const Avatar = styled.Image`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50px;
`;

export const linearGradient = [
  '#cc2366',
  '#bc1888',
  '#dc2743',
  '#e6683c',
  '#f09433',
  '#f3b940',
];
