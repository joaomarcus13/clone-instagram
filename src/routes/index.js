import React, { useCallback, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import TabNavigator from './TabNavigator';
// import NewStory from '../pages/NewStory/NewStory';

// import Activity from '../pages/Activity/Activity';
// import NewPost from '../pages/NewPost/NewPost';
// import { enableScreens } from 'react-native-screens';
// enableScreens();
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
// import StackChat from './StackChat';
import StackLogin from './StackLogin';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/user';
import auth from '@react-native-firebase/auth';
// import Stories from '../pages/Stories/Stories';
import { getUsername } from '../util/functions';
import StackNavigator from './StackNavigator';
// const Stack = createNativeStackNavigator();
import firestore from '@react-native-firebase/firestore';
import api from '../services/api';

export default function MyStack() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  // Handle user state changes
  const onAuthStateChanged = useCallback(
    async (userAuth) => {
      setUser(userAuth);
      if (userAuth) {
        // console.log('usezr in stack onauthstate', userAuth);
        const loggedUser = await api.getUser(userAuth.uid);
        dispatch(login({ uid: userAuth.uid, ...loggedUser }));
        // dispatch(
        //   login({
        //     displayName: userAuth.displayName || '',
        //     email: userAuth.email,
        //     metadata: userAuth.metadata,
        //     uid: userAuth.uid,
        //     photoURL: userAuth.photoURL,
        //     username: getUsername(userAuth.email),
        //   })
        // );
      }
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing, dispatch]
  );

  // console.log('user in stack', user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log('usereffect');
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged, user]);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <StackNavigator /> : <StackLogin />}
    </NavigationContainer>
  );
}
