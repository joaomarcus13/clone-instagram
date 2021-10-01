import React from 'react';

import Chat from '../pages/Chat/Chat';
import ChatScreen from '../pages/ChatScreen/ChatScreen';
import Settings from '../pages/Settings/Settings';
import Themes from '../pages/Themes/Themes';
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
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="Themes"
        component={Themes}
        options={{
          stackAnimation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
