import React from 'react';

import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

import { enableScreens } from 'react-native-screens';
enableScreens();
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import SignUpNext from '../pages/SignUpNext/SignUp';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      headerMode={'none'}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          stackAnimation: 'none',
        }}
      />
      <Stack.Screen
        name="SignUpNext"
        component={SignUpNext}
        options={{
          stackAnimation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
