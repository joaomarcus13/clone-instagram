import React, { useCallback, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import NewStory from '../pages/NewStory/NewStory';

import Activity from '../pages/Activity/Activity';
import NewPost from '../pages/NewPost/NewPost';
// import { enableScreens } from 'react-native-screens';
// enableScreens();
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import StackChat from './StackChat';
import StackLogin from './StackLogin';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/user';
import auth from '@react-native-firebase/auth';
import Stories from '../pages/Stories/Stories';
import { getUsername } from '../util/functions';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  // Handle user state changes
  const onAuthStateChanged = useCallback(
    (userAuth) => {
      setUser(userAuth);
      if (userAuth) {
        // console.log('usezr in stack onauthstate', userAuth);
        dispatch(
          login({
            displayName: userAuth.displayName || '',
            email: userAuth.email,
            metadata: userAuth.metadata,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            username: getUsername(userAuth.email),
          })
        );
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

  const config = {
    animation: 'spring',
    config: {
      stiffness: 100,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        headerMode={'none'}
      >
        {user ? (
          <>
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen
              name="NewStory"
              component={NewStory}
              options={{
                stackAnimation: 'slide_from_left',
                // transitionSpec: {
                //   open: config,
                //   close: config,
                // },
                // gestureDirection: 'horizontal-inverted',
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <Stack.Screen
              name="StackChat"
              component={StackChat}
              options={{
                stackAnimation: 'slide_from_right',
                // replaceAnimation: 'push',

                // transitionSpec: {
                //   open: config,
                //   close: config,
                // },
                // gestureDirection: 'horizontal',
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
          </>
        ) : (
          <Stack.Screen name="StackLogin" component={StackLogin} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
