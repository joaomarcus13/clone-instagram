import React from 'react';
import * as Styled from './styles';
import { FlatList } from 'react-native';
import teste from '../../assets/images/rm.jpg';

export default function Story({ data }) {
  console.log(data.img);
  return (
    <Styled.Story>
      <Styled.Gradient
        colors={[
          '#cc2366',
          '#bc1888',
          '#dc2743',
          '#e6683c',
          '#f09433',
          '#f3b940',
        ]}
      >
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
