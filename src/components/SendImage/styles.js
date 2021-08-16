import styled from 'styled-components/native';
import DownloadIcon from 'react-native-vector-icons/Feather';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import LinkIcon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from '../../style/icons';

export const Container = styled.View`
  flex: 1;
  /* position: relative; */
`;

export const Header = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  position: absolute;
  top: 0;
  z-index: 10;
`;
export const Image = styled.Image`
  flex: 1;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 95px;
  padding: 8px;
  background-color: ${({ theme }) => theme.bg};
`;

export const ToStory = styled.View`
  width: 80px;
  /* height: 45px; */
  align-items: center;
  /* justify-content: space-evenly; */
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin: 6px 10px auto auto; */
  background-color: ${({ theme }) => theme.icon};
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.bg};
`;

export const Icons = {
  Close: styled(Icon.Ionicons)`
    font-size: 28px;
    color: ${({ theme }) => theme.icon};
  `,
  Download: styled(Icon.Feather)`
    font-size: 22px;

    color: ${({ theme }) => theme.icon};
  `,
  ArrowRight: styled(Icon.MaterialIcons)`
    font-size: 22px;
    color: ${({ theme }) => theme.bg};
  `,
  Link: styled(Icon.Fontisto)`
    font-size: 20px;
    color: ${({ theme }) => theme.icon};
  `,
  Sticker: styled(Icon.MaterialCommunityIcons)`
    font-size: 22px;
    color: ${({ theme }) => theme.icon};
  `,
  Draw: styled(Icon.MaterialCommunityIcons)`
    font-size: 23px;
    color: ${({ theme }) => theme.icon};
  `,
  Letter: styled(Icon.MaterialCommunityIcons)`
    font-size: 26px;
    color: ${({ theme }) => theme.icon};
  `,
};

export const ImageProfile = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid white;
`;
export const Border = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  border: 1px solid white;
`;
export const TextProfile = styled.Text`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.text};
`;
