import React from 'react';

import Chat from '../pages/Chat/Chat';
import ChatScreen from '../pages/ChatScreen/ChatScreen';

import { enableScreens } from 'react-native-screens';
enableScreens();
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      headerMode={'none'}
    >
      <Stack.Screen name="ChatList" component={Chat} />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          stackAnimation: 'none',
        }}
      />
    </Stack.Navigator>
  );
}
