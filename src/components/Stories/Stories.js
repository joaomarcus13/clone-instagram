import React from 'react';
import * as Styled from './styles';
import { FlatList } from 'react-native';
import { linearGradient } from '../../style/global';
import teste from '../../assets/images/rm.jpg';

export default function Story({ data }) {
  return (
    <Styled.Story>
      <Styled.Gradient colors={linearGradient}>
        <Styled.Border>
          <Styled.StoryImg source={data.img} />
        </Styled.Border>
      </Styled.Gradient>
      <Styled.StoryText>{data.author}</Styled.StoryText>
    </Styled.Story>
  );
}

// export default function Stories({ data }) {
//   const renderStory = ({ item }) => <Story data={item} />;
//   return (
//     <FlatList
//       data={data}
//       renderItem={renderStory}
//       keyExtractor={(item) => item.img}
//       showsHorizontalScrollIndicator={false}
//       horizontal
//     />
//   );
// }
