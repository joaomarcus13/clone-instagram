import styled from 'styled-components/native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';

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

export const IconAddPost = styled(IconFA)`
  font-size: 26px;
  color: ${({ theme }) => theme.icon};
`;
export const IconActivity = styled(IconAD)`
  font-size: 23px;
  color: ${({ theme }) => theme.icon};
`;
export const IconMessage = styled(IconF)`
  font-size: 25px;
  color: ${({ theme }) => theme.icon};
`;
