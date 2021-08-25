import React from 'react';
import * as Styled from './styles';
import { FlatList, TouchableOpacity } from 'react-native';
import { linearGradient } from '../../style/global';
import imgProfile from '../../assets/icons/default-user.jpg';
import teste from '../../assets/images/rm.jpg';
import { useNavigation } from '@react-navigation/native';

export default function Story({ data }) {
  const navigator = useNavigation();
  console.log('component sttories', data);
  return (
    <Styled.Story>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigator.navigate('Story', { data });
        }}
      >
        <Styled.Gradient colors={linearGradient}>
          <Styled.Border>
            <Styled.StoryImg source={data[0].user.photoURL || imgProfile} />
          </Styled.Border>
        </Styled.Gradient>
      </TouchableOpacity>
      <Styled.StoryText>{data[0].user.name}</Styled.StoryText>
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
