import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/bar/home/HomeScreen';
import ActivityScreen from '../../screens/home/activity/ActivityScreen';
import PostScreen from '../../screens/home/post/PostScreen';
import StoreScreen from '../../screens/home/store/StoreScreen';
import EventScreen from '../../screens/home/event/EventScreen';
import MateScreen from '../../screens/home/mate/MateScreen';
import PlusScreen from '../../screens/home/activity/PlusScreen';
import SearchScreen from '../../screens/home/activity/SearchScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{headerTitle: '액티비티'}}
      />
      <HomeStack.Screen
        name="Post"
        component={PostScreen}
        options={{headerTitle: '게시판'}}
      />
      <HomeStack.Screen
        name="Mate"
        component={MateScreen}
        options={{headerTitle: '메이트'}}
      />
      <HomeStack.Screen
        name="Store"
        component={StoreScreen}
        options={{headerTitle: '스토어'}}
      />
      <HomeStack.Screen
        name="Event"
        component={EventScreen}
        options={{headerTitle: '이벤트'}}
      />
      <HomeStack.Screen
        name="Plus"
        component={PlusScreen}
        options={{headerTitle: ' 강릉시의 맞춤형 액티비티 확인!'}}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerTitle: '장소 검색'}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
