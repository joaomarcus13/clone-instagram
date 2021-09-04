import styled from 'styled-components/native';
import Logo from '../../assets/icons/camera copy.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  align-items: center;
`;
export const ContainerComponent = styled.View`
  height: 300px;
  width: 85%;
  top: 18%;
  /* background-color: red; */
  align-items: center;
  justify-content: space-evenly;
`;

export const ViewLogo = styled.View`
  height: 90px;
  width: 90px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.icon};
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const LogoCamera = styled(Logo)``;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.type === 'skip' ? props.theme.bg : '#1a8ce5'};
`;

export const Text = {
  H1: styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  `,
  H2: styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
  `,
  H3: styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.text};
  `,
  Button: styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${(props) => (props.type === 'skip' ? '#1a8ce5' : 'white')};
  `,
};

//modal
export const ContainerModal = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;
export const Modal = styled.View`
  top: 200px;
  border-radius: 4px;
  height: 30%;
  width: 70%;
  background-color: ${({ theme }) => theme.modal};
  align-items: center;
  z-index: 20;
`;
export const HeaderModal = styled.View`
  justify-content: center;
  /* background-color: blue; */
  height: 30%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.borderSecondary}; ;
`;
export const ContentModal = styled.View`
  /* background-color: red; */
  width: 100%;
  flex: 1;
  justify-content: space-evenly;
`;
export const ItemModal = styled.TouchableOpacity`
  padding: 20px;
`;
