import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import Feed from '../pages/Feed/Feed';
import Explorer from '../pages/Explorer/Explorer';

import IconSearch from 'react-native-vector-icons/Ionicons';
import { icons } from '../style/icons';

import searchP from '../assets/icon/Search.png';
import SearchS from '../assets/icon/Search.svg';
// import Reels from '../assets/icon/reels.svg';

import IconShop from 'react-native-vector-icons/MaterialCommunityIcons';
import iconReels from '../assets/icons/icons-reels.png';
import testeperfil from '../assets/images/a.jpg';
import Drawer from './DrawerProfile';
// import Drawer2 from './DrawerFeed';
// import Icons from '../style/icons';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';
import { useContext } from 'react';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const themeContext = useContext(ThemeContext);
  // console.log(themeContext);
  const photoURL = useSelector((state) => state.user.photoURL);
  const { Search, Reels, Bag } = icons[themeContext.name];
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: themeContext.bg,
          borderTopColor: themeContext.borderSecondary,
        },
        activeTintColor: themeContext.bg,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{ width: 22, height: 22 }}
              source={icons[themeContext.name].home}
            />
            // <Home />
          ),
        }}
      />

      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // <IconSearch
            //   name={focused ? 'ios-search' : 'ios-search-outline'}
            //   color="white"
            //   size={28}
            // />
            <Search />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Reels />,
        }}
      />
      <Tab.Screen
        name="Store"
        component={Explorer}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Bag />,
        }}
      />
      <Tab.Screen
        name="DrawerProfile"
        component={Drawer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={{ uri: photoURL }}
              style={{ height: 28, width: 28, borderRadius: 50 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
