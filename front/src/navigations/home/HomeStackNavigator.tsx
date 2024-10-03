import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/bar/home/HomeScreen';
import ActivityNavigator from '../../navigations/home/ActivityNavigator';
import PostScreen from '../../screens/home/post/PostScreen';
import StoreScreen from '../../screens/home/store/StoreScreen';
import EventScreen from '../../screens/home/event/EventScreen';
import MateScreen from '../../screens/home/mate/MateScreen';
import {homeNavigations} from '../../constants/navigations';

export type HomeStackParamList = {
  [homeNavigations.HOME_MAIN]: undefined;
  [homeNavigations.ACTIVITY]: undefined;
  [homeNavigations.POST]: undefined;
  [homeNavigations.MATE]: undefined;
  [homeNavigations.STORE]: undefined;
  [homeNavigations.EVENT]: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name={homeNavigations.HOME_MAIN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={homeNavigations.ACTIVITY}
        component={ActivityNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={homeNavigations.POST}
        component={PostScreen}
        options={{headerTitle: '게시판'}}
      />
      <HomeStack.Screen
        name={homeNavigations.MATE}
        component={MateScreen}
        options={{headerTitle: '메이트'}}
      />
      <HomeStack.Screen
        name={homeNavigations.STORE}
        component={StoreScreen}
        options={{headerTitle: '스토어'}}
      />
      <HomeStack.Screen
        name={homeNavigations.EVENT}
        component={EventScreen}
        options={{headerTitle: '이벤트'}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
