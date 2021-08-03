import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../pages/Feed/Feed';
import Explorer from '../pages/Explorer/Explorer';
import Profile from '../pages/Profile/Profile';
// import IconHome from 'react-native-vector-icons/Foundation';
import IconSearch from 'react-native-vector-icons/Ionicons';
// import IconShop from 'react-native-vector-icons/MaterialCommunityIcons';
import IconShop from 'react-native-vector-icons/MaterialCommunityIcons';
import iconReels from '../assets/icons/icons-reels.png';
import testeperfil from '../assets/images/a.jpg';
import Drawer from './DrawerNavigator';
import Drawer2 from './DrawerTest';
import Icons from '../style/icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
        activeTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Drawer2}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // <IconHome name="home" color={'white'} size={focused ? 29 : 28} />
            <Icons.Foundation
              name="home"
              color={'white'}
              size={focused ? 29 : 28}
            />
            // <Icons.home />
          ),
        }}
      />

      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IconSearch
              name={focused ? 'ios-search' : 'ios-search-outline'}
              color="white"
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                backgroundColor: 'white',
                height: 24,
                width: 24,
                borderRadius: 7,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image source={iconReels} style={{ height: 25, width: 25 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Explorer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IconShop
              name={focused ? 'shopping' : 'shopping-outline'}
              color="white"
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Drawer}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={testeperfil}
              style={{ height: 30, width: 30, borderRadius: 50 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
