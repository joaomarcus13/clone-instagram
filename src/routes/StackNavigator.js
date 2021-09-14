import React, { useCallback, useEffect, useState } from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import NewStory from '../pages/NewStory/NewStory';

import Activity from '../pages/Activity/Activity';
import NewPost from '../pages/NewPost/NewPost';
// import { enableScreens } from 'react-native-screens';
// enableScreens();
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import StackChat from './StackChat';
import database from '@react-native-firebase/database';
import Stories from '../pages/Stories/Stories';
import { useDispatch, useSelector } from 'react-redux';
import { storePosts } from '../store/actions/post';
import Profile from '../pages/Profile/Profile';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const uidUser = useSelector((state) => state.user.uid);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = database()
      .ref('posts')
      .on('value', (snapshot) => {
        // console.log('User data: ', snapshot.val());
        // let postsData = [];
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          // Object.values(snapshot.val()).forEach((element) => {
          // console.log('element', Object.values(element));
          // Object.values(element).forEach((e) => {
          // postsData.push(e);
          // });
          // postsData.push(Object.values(element));
          // });
          const postsData = Object.values(snapshot.val());
          // console.log('snapshot', postsExplorer);
          dispatch(storePosts(postsData));
          // dispatch(writePostFeed(postsExplorer)); //////alterar depois pra verificar se usuario esta sendo seguido
          // const userPosts = postsExplorer.filter((p) => p.user.uid === uidUser);
          // dispatch(writePostUser(userPosts));
        }
      });
    return () => database().ref('posts').off('value', unsubscribe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      headerMode={'none'}
    >
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen
        name="NewStory"
        component={NewStory}
        options={{
          stackAnimation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="StackChat"
        component={StackChat}
        options={{
          stackAnimation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          stackAnimation: 'none',
        }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{
          stackAnimation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="Story"
        component={Stories}
        options={{
          stackAnimation: 'default',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          stackAnimation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
