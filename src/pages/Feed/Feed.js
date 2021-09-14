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

  const [stories, setStories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = database()
      .ref('stories')
      .on('value', (snapshot) => {
        const data = {};
        if (snapshot.exists()) {
          // const stories = snapshot.val()
          for (let i of Object.values(snapshot.val())) {
            data.hasOwnProperty(i.user.uid)
              ? data[i.user.uid].push(i)
              : (data[i.user.uid] = [i]);
          }
          setStories(Object.values(data));
          dispatch(storeStories(Object.values(data)));
          console.log(Object.values(data));
        }
      });
    return () => database().ref('stories').off('value', unsubscribe);
  }, []);
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
  // const uidUser = useSelector((state) => state.user.uid);
  // const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = database()
  //     .ref('posts')
  //     .on('value', (snapshot) => {
  //       // console.log('User data: ', snapshot.val());
  //       if (snapshot.exists()) {
  //         const postsData = Object.values(snapshot.val());
  //         setPosts(postsData);
  //         const userPosts = postsData.filter((p) => p.user.uid === uidUser);
  //         dispatch(writePostUser(userPosts));
  //       }
  //     });
  //   return () => database().ref('posts').off('value', unsubscribe);
  // }, []);

  // console.log(posts);

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
