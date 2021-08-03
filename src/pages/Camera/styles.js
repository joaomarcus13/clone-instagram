import styled from 'styled-components/native';
import ReverseCamera from 'react-native-vector-icons/Ionicons';
import SearchImage from 'react-native-vector-icons/Ionicons';
import Setting from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.bg};
`;

export const Camera = styled(RNCamera)`
  flex: ${({ isDrawerOpen }) => (isDrawerOpen ? 1 : 0)};
  justify-content: flex-end;
  align-items: center;
`;

export const ViewCapture = styled.View`
  height: 110px;
  /* width: 100%; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const CaptureButton = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  background-color: white;
`;

export const Border = styled.View`
  height: 82px;
  width: 82px;
  border-radius: 50px;
  align-items: center;
  border: 3px solid white;
  justify-content: center;
  background-color: transparent;
`;

export const Footer = styled.View`
  height: 90px;
  width: 100%;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg};
`;

export const SwitchCamera = styled(ReverseCamera)`
  font-size: 40px;
  color: ${({ theme }) => theme.icon};
`;
export const Galery = styled(SearchImage)`
  font-size: 35px;
  color: ${({ theme }) => theme.icon};
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 20px;
`;

export const Flash = styled(IconMI)`
  font-size: 26px;
  color: ${({ theme }) => theme.icon};
`;
export const Settings = styled(Setting)`
  font-size: 25px;
  color: ${({ theme }) => theme.icon};
`;
export const Close = styled(IconF)`
  font-size: 35px;
  color: ${({ theme }) => theme.icon};
`;
