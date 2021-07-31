import styled from 'styled-components/native';
import IconSearch from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconS from 'react-native-vector-icons/SimpleLineIcons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;

export const Header = styled.View`
  height: 55px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background-color: red; */
  padding: 0 10px 0 30px;
`;
export const TextHeader = styled.Text`
  width: 70%;
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const IconsHeader = styled.View`
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const AddPost = styled(IconFA)`
  font-size: 26px;
  color: ${({ theme }) => theme.icon};
`;
export const Menu = styled(IconS)`
  font-size: 21px;
  color: ${({ theme }) => theme.icon};
`;

export const Information = styled.View`
  height: 150px;
  /* flex-direction: row; */
  align-items: flex-start;
  justify-content: space-evenly;
  /* background-color: blue; */
`;
export const ViewImageProfile = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /* background-color: green; */
`;

export const ImageProfile = styled.Image`
  height: 93px;
  width: 93px;
  border-radius: 50px;
`;
export const TextProfile = styled.Text`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  margin: 5px 0 10px 20px;
`;

export const ViewNumbers = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  /* height: 100%; */
  /* padding-bottom: 8%; */
`;
export const ViewEachNumbers = styled.View`
  align-items: center;
  justify-content: space-around;
`;

export const H1 = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;
export const H2 = styled.Text`
  /* font-size: 20px; */
  color: ${({ theme }) => theme.text};
`;

export const ViewButton = styled.View`
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  margin: 0 8px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => (props.bg ? 'transparent' : '#0095f6')};
  border: ${({ bg, theme }) => (bg ? `1px solid ${theme.border}` : 'none')};
`;

export const EditProfile = styled.TouchableOpacity`
  width: 93%;
  margin: 0 auto;
  height: 35px;
  margin-top: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.border};
`;
export const TextEditProfile = styled.Text`
  font-size: 15px;

  color: ${({ theme }) => theme.text};
`;