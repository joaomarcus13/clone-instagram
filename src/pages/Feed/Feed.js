/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import { Container } from './styles';
import Header from '../../components/Header/Header';
import PostList from '../../components/PostList/PostList';
// import themes from '../../style/themes';

import Story from '../../components/Stories/Stories';
import AddStory from '../../components/AddStory/AddStory';

import { storeStories } from '../../store/actions/post';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as Styled from './styles';

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
    <View>
      <Styled.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{}}
      >
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
      </Styled.ScrollView>
    </View>
  );
}

export default function Feed() {
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
        <PostList posts={posts} />
        {/* </View> */}
        {/* <View>
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View> */}
        {/* </View> */}
      </ScrollView>
    </Container>
  );
}
