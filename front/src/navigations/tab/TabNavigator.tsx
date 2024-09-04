import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import MyFavoriteScreen from '../../screens/bar/myfavorite/MyFavoriteScreen';
import ChatScreen from '../../screens/bar/chat/ChatScreen';
import HomeStackNavigator from '../home/HomeStackNavigator';
import MyPageScreen from '../../screens/bar/mypage/MyPageScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="MyFavorite"
        component={MyFavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons/bar/myfavorite.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons/bar/home.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons/bar/chat.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My Page"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/icons/bar/mypage.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
