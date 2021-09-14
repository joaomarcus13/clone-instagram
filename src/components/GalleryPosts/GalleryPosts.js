import React from 'react';
import { Text, View, Dimensions, FlatList, Image } from 'react-native';
import * as Styled from './styles';
const width = Dimensions.get('screen').width;
import database from '@react-native-firebase/database';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ImagePost({ item, index }) {
  return (
    <View
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
    </View>
  );
}

export default function GalleryPosts({ posts }) {
  const renderItem = ({ item, index }) => (
    <ImagePost item={item} index={index} />
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
