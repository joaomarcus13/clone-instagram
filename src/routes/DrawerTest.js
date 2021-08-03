import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent/Drawer';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';
import Camera from '../pages/Camera/Camera';
import Chat from '../pages/Chat/Chat';
import { Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;
import Feed from '../pages/Feed/Feed';
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
      <Drawer2.Screen name="Feed" component={Feed} />
      {/* <Drawer.Screen name="Settings" component={Settings} /> */}
    </Drawer2.Navigator>
  );
}

function MyDrawer() {
  return (
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
  );
}

export default MyDrawer;
