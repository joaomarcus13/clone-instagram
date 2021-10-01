import React from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Styled from './styles';
const width = Dimensions.get('screen').width;
import database from '@react-native-firebase/database';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

function ImagePost({ item, index, userId }) {
  const navigation = useNavigation();
  function handlePostViewer() {
    navigation.navigate('PostViewer', { index, textHeader: 'Posts', userId });
  }

  return (
    <TouchableOpacity
      onPress={handlePostViewer}
      style={{
        margin: 1,
        flexDirection: 'row',
      }}
    >
      <FastImage
        style={{
          width: width / 3,
          height: width / 3,
        }}
        source={{ uri: item.url }}
      />
    </TouchableOpacity>
  );
}

export default function GalleryPosts({ posts, userId }) {
  const renderItem = ({ item, index }) => (
    <ImagePost item={item} index={index} userId={userId} />
  );

  // const data = useSelector((state) => state.post.userPosts);

  // useEffect(() => {}, [posts]);

  return (
    <FlatList
      style={{ width: width }}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
      numColumns={3}
      showsVerticalScrollIndicator={false}
    />
  );
}
