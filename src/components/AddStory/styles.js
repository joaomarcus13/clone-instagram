import styled from 'styled-components/native';

export const Story = styled.View`
  position: relative;
  height: 115px;
  align-items: center;
  justify-content: space-around;
  padding: 8px 5.5px;
  /* padding: 1% 0.8%; */
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

export const Border = styled.View`
  height: 77px;
  width: 77px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.bg};
`;

export const IconAdd = styled.Image`
  height: 15px;
  width: 15px;
`;

export const BorderIcon = styled.View`
  position: absolute;
  top: 60px;
  right: 15px;
  height: 18px;
  width: 18px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.bg};
`;
