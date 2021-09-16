/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import { Container } from './styles';
import Header from '../../components/Header/Header';

// import themes from '../../style/themes';
import Post from '../../components/Post/Post';
import Story from '../../components/Stories/Stories';
import AddStory from '../../components/AddStory/AddStory';

import { storeStories } from '../../store/actions/post';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ScrollStories() {
  const renderStory = ({ item, index }) => <Story data={item} index={index} />;

  const { following, uid } = useSelector((state) => state.user);
  const stories = useSelector((state) => {
    return state.post.stories.filter(
      (story) =>
        story[0].user.uid === following.find((e) => e === story[0].user.uid) ||
        story[0].user.uid === uid
    );
  });

  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AddStory />

        <View style={{ flexDirection: 'row' }}>
          <FlatList
            data={stories}
            renderItem={renderStory}
            keyExtractor={(item) => item[0].user.uid}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Feed() {
  const renderPost = ({ item }) => <Post data={item} />;

  const { following, uid } = useSelector((state) => state.user);
  const posts = useSelector((state) => {
    return state.post.posts.filter(
      (post) =>
        post.user.uid === following.find((e) => e === post.user.uid) ||
        post.user.uid === uid
    );
  });

  return (
    <Container>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View> */}
        {/* <View> */}
        <ScrollStories />
        {/* </View> */}
        <View>
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    </Container>
  );
}
