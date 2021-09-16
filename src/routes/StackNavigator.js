import React, { useCallback, useEffect, useState } from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import NewStory from '../pages/NewStory/NewStory';

import Activity from '../pages/Activity/Activity';
import NewPost from '../pages/NewPost/NewPost';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import StackChat from './StackChat';
import database from '@react-native-firebase/database';
import Stories from '../pages/Stories/Stories';
import { useDispatch, useSelector } from 'react-redux';
import {
  storePosts,
  storeStories,
  getPosts,
  getStories,
} from '../store/actions/post';
import Profile from '../pages/Profile/Profile';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const uidUser = useSelector((state) => state.user.uid);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribePosts = database()
      .ref('posts')
      .on('value', (snapshot) => {
        if (snapshot.exists()) {
          const postsData = Object.values(snapshot.val());
          dispatch(storePosts(postsData));
        }
      });

    const unsubscribeStories = database()
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
          // setStories(Object.values(data));
          dispatch(storeStories(Object.values(data)));
        }
      });

    return () => {
      database().ref('posts').off('value', unsubscribePosts);
      database().ref('stories').off('value', unsubscribeStories);
    };
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
