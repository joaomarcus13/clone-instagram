import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Camera from '../pages/Camera/Camera';
import Chat from '../pages/Chat/Chat';
import { Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;
// import Feed from '../pages/Feed/Feed';
import Stack from './StackNavigator';
// import StackChat from './StackChat';
import { NavigationContainer } from '@react-navigation/native';
// import ChatScreen from '../pages/ChatScreen/ChatScreen';
const Drawer = createDrawerNavigator();
const Drawer2 = createDrawerNavigator();

function MyDrawer2() {
  return (
    <Drawer2.Navigator
      drawerContent={(props) => <Chat {...props} />}
      screenOptions={{}}
      drawerStyle={{
        width: width,
      }}
      drawerType="slide"
      drawerPosition="right"
      overlayColor={0}
      edgeWidth={width / 2}
    >
      <Drawer2.Screen name="Stack" component={Stack} />
      {/* <Drawer2.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ gestureEnabled: false }}
      /> */}
      {/* <Drawer.Screen name="Settings" component={Settings} /> */}
    </Drawer2.Navigator>
  );
}

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Camera {...props} />}
        screenOptions={{}}
        drawerStyle={{
          width: width,
        }}
        // openByDefault={true}
        drawerType="slide"
        drawerPosition="left"
        overlayColor={0}
        edgeWidth={width / 2}
      >
        {/* <Drawer.Screen name="Feed" component={Feed} /> */}
        <Drawer.Screen name="Drawer" component={MyDrawer2} />
        {/* <Drawer.Screen name="Profile" component={MyDrawer2} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
