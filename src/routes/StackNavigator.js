import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import Camera from '../pages/Camera/Camera';
import Chat from '../pages/Chat/Chat';
import Activity from '../pages/Activity/Activity';
import NewPost from '../pages/NewPost/NewPost';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Login from '../pages/Login/Login';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const isLoggedIn = true;

  const config = {
    animation: 'timing',
    config: {
      duration: 80,
      easing: Easing.out(Easing.poly(5)),
    },
  };

  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 80,
      easing: Easing.in(Easing.linear),
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
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen
              name="Camera"
              component={Camera}
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
              name="Chat"
              component={Chat}
              options={{
                stackAnimation: 'slide_from_right',
                // transitionSpec: {
                //   open: config,
                //   close: closeConfig,
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
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
