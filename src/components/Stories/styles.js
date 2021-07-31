import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex-direction: row;
`;

export const YourStory = styled.View``;
export const YourStoryImg = styled.Image``;

export const Story = styled.View`
  height: 115px;
  align-items: center;
  justify-content: space-around;
  /* padding: 10% 1%; */
  padding: 8px 5.5px;
  border-bottom-color: ${({ theme }) => theme.borderSecondary};
  border-bottom-width: 0.3px;
`;
export const StoryImg = styled.Image`
  width: 65px;
  height: 65px;

  border-radius: 50px;
`;
export const StoryText = styled.Text`
  font-size: 11px;
  color: ${({ theme }) => theme.text};
`;

export const Gradient = styled(LinearGradient)`
  height: 77px;
  width: 77px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const Border = styled.View`
  height: 72px;
  width: 72px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.bg}; ;
`;
