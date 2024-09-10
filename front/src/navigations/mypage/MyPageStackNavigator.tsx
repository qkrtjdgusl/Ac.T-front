import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageScreen from '../../screens/bar/mypage/MyPageScreen';
import ProfileScreen from '../../screens/bar/mypage/button/ProfileScreen';
import TravelRecordsScreen from '../../screens/bar/mypage/button/TravelRecordsScreen';
import BadgesScreen from '../../screens/bar/mypage/button/BadgesScreen';
import PreferencesScreen from '../../screens/bar/mypage/button/PreferencesScreen';

const MyPageStack = createStackNavigator();

const MyPageStackNavigator = () => {
  return (
    <MyPageStack.Navigator initialRouteName="MyPage">
      <MyPageStack.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{title: '마이페이지'}}
      />
      <MyPageStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: '내 정보'}}
      />
      <MyPageStack.Screen
        name="TravelRecords"
        component={TravelRecordsScreen}
        options={{title: '내 여행기록'}}
      />
      <MyPageStack.Screen
        name="Badges"
        component={BadgesScreen}
        options={{title: '내 뱃지'}}
      />
      <MyPageStack.Screen
        name="Preferences"
        component={PreferencesScreen}
        options={{title: '내 취향'}}
      />
    </MyPageStack.Navigator>
  );
};

export default MyPageStackNavigator;
