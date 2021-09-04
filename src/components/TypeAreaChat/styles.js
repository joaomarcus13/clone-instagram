import styled from 'styled-components/native';
import CameraSVG from '../../assets/icons/camera.svg';
import SearchSVG from '../../assets/icons/search.svg';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../style/icons';

export const Container = styled.View``;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.modal};
  margin: 0 10px;
  height: 50px;
  border-radius: 50px;
  padding-left: 55px;
  padding-right: 60px;
  font-size: 16px;
`;

export const AreaIcons = styled.View`
  position: absolute;
  top: 10px;
  right: 25px;
  width: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonSend = styled.TouchableOpacity`
  height: 90%;
  width: 50px;
  position: absolute;
  top: 12px;
  right: 20px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #1a8ce5;
`;

export const Icons = {
  Camera: styled(CameraSVG)`
    margin-bottom: 3px;
  `,
  Mic: styled(Icon.Feather)`
    font-size: 23px;
    color: ${({ theme }) => theme.icon};
  `,
  Galery: styled(Icon.FontAwesome)`
    font-size: 22px;
    color: ${({ theme }) => theme.icon};
  `,
  Sticker: styled(Icon.MaterialCommunityIcons)`
    font-size: 27px;
    color: ${({ theme }) => theme.icon};
  `,
  Search: styled(SearchSVG)``,
};

export const Gradient = styled(LinearGradient)`
  position: absolute;
  top: 5px;
  left: 15px;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background-color: #1a8ce5;
  z-index: 10;
  align-items: center;
  justify-content: center;
`;
