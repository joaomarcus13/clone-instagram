import styled from 'styled-components/native';
import IconSearch from 'react-native-vector-icons/Ionicons';
export const Container = styled.View`
  height: 56px;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.TextInput`
  width: 90%;
  /* height: 35px; */
  padding: 4px;
  border-radius: 10px;
  padding-left: 45px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.borderSecondary};
  position: relative;
`;

export const SearchIcon = styled(IconSearch)`
  position: absolute;
  font-size: 20px;
  left: 30px;
  color: ${({ theme }) => theme.icon};
`;
