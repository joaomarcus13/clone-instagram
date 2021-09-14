import styled from 'styled-components';

export const ViewProgress = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 96%;
  height: 10px;
  top: 6px;
  z-index: 20;
`;
const ProgressMixin = styled.View`
  height: 2px;
  margin: 0 1px;
  border-radius: 8px;
`;
export const ProgressBar = styled(ProgressMixin)`
  width: ${({ width }) => width}px;
  background-color: #d2d2d2c2;
`;
export const Progress = styled(ProgressMixin)`
  position: absolute;
  width: ${({ width }) => width}px;
  background-color: white;
`;
const ButtonMixin = styled.TouchableOpacity`
  position: absolute;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  z-index: 10;
`;
export const NextStory = styled(ButtonMixin)`
  right: 0;
`;
export const PrevStory = styled(ButtonMixin)`
  left: 0;
`;
