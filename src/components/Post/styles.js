import styled from 'styled-components/native';
import IconF from 'react-native-vector-icons/Feather';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 55px;
  padding: 14px;
`;
export const Perfil = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  /* margin: 0 12px 0 12px; */
  margin-right: 12px;
`;
export const H1Top = styled.Text`
  font-weight: 700;
  flex: 1;
  color: ${({ theme }) => theme.text};
`;

export const Dots = styled(IconF)`
  margin-right: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.icon};
`;

export const AreaIcons = styled.View`
  flex-direction: row;
  /* background-color: red; */
  align-items: center;
  padding: 8px 14px;
`;

export const Like = styled(IconAD)`
  font-size: 23px;
  color: ${({ theme }) => theme.icon};
  margin-right: 14px;
`;
export const Comment = styled(IconF)`
  font-size: 25px;
  color: ${({ theme }) => theme.icon};
  margin-right: 14px;
`;
export const Share = styled(IconF)`
  font-size: 23px;
  color: ${({ theme }) => theme.icon};
`;
export const BookMark = styled(IconFA)`
  font-size: 25px;
  color: ${({ theme }) => theme.icon};
  margin-left: auto;
`;

export const Description = styled.View`
  padding: 0 14px;
  /* justify-content: space-around; */
`;
export const DescriptionText = styled.View`
  flex-direction: row;
  margin: 3px 0 5px 0;
`;

export const H1 = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-right: 5px;
`;
export const H2 = styled.Text`
  color: ${({ theme }) => theme.text};
`;
export const H3 = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
`;
export const H4 = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.textSecondary};
  /* margin-top: 5px; */
`;

export const AddComment = styled.View`
  flex-direction: row;
  margin: 8px 0 5px 0;
`;

export const ImageComment = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

export const Input = styled.TextInput`
  height: 30px;

  padding: 0;
`;
