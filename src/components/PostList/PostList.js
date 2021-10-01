import React from 'react';
import { FlatList, View } from 'react-native';
import Post from '../Post/Post';

export default function PostList({ posts, index }) {
  const renderPost = ({ item }) => <Post data={item} />;
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={index || 0}
      />
    </View>
  );
}
