import styled from 'styled-components/native';
import IconCamera from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import Icon from '../../style/icons';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Image = styled.Image`
  height: 55px;
  width: 55px;
  border-radius: 50px;
`;

export const ViewText = styled.View``;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
`;
export const TextSecondary = styled.Text`
  color: ${({ theme }) => theme.textSecondary};
  width: 70%;
  /* overflow: hidden; */
`;

export const Icons = {
  Camera: styled(Icon.Ionicons)`
    font-size: 28px;
    color: ${({ theme }) => theme.iconSecondary};
  `,
};

export const CameraIcon = styled(IconCamera)`
  font-size: 28px;
  color: ${({ theme }) => theme.iconSecondary};
`;
