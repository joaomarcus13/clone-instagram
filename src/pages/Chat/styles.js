import styled from 'styled-components/native';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';

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

export const BackIcon = styled(IconAD)`
  font-size: 25px;
  color: ${({ theme }) => theme.icon};
`;
export const VideoIcon = styled(IconI)`
  font-size: 28px;
  color: ${({ theme }) => theme.icon};
`;
export const NewMessageIcon = styled(IconE)`
  font-size: 21px;
  color: ${({ theme }) => theme.icon};
`;
