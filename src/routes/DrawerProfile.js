import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerProfile/Drawer';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{}}
      drawerStyle={{
        width: 220,
      }}
      drawerType="slide"
      drawerPosition="right"
      overlayColor={0}
      edgeWidth={500}
    >
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} options={{}} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
