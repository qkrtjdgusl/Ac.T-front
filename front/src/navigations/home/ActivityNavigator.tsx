import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ActivitySearchScreen from '../../screens/home/activity/ActivitySearchScreen';
import ActivityPlaceDetailScreen from '../../screens/home/activity/ActivityPlaceDetailScreen';
import ActivityWeatherScreen from '../../screens/home/activity/ActivityWeatherScreen';
import ActivityAccommodationScreen from '../../screens/home/activity/ActivityAccommodationScreen';

import {activityNavigations} from '../../constants/navigations';
import ActivityMapScreen from '../../screens/home/activity/ActivityMapScreen';
import ActivityScreen from '../../screens/home/activity/ActivityScreen';

export type ActivityStackParamList = {
  [activityNavigations.ACTIVITY_MAIN]: undefined;
  [activityNavigations.ACTIVITY_MAP]: undefined;
  [activityNavigations.ACTIVITY_SEARCH]: undefined;
  [activityNavigations.ACTIVITY_PLACE_DETAIL]: {
    placeName: string;
    placeType: string;
    imageUrl: string;
  };
  [activityNavigations.ACTIVITY_WEATHER]: undefined;
  [activityNavigations.ACTIVITY_ACCOMMODATION]: undefined;
};

const ActivityStack = createStackNavigator<ActivityStackParamList>();

function ActivityNavigator({}) {
  return (
    <ActivityStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <ActivityStack.Screen
        name={activityNavigations.ACTIVITY_MAIN}
        component={ActivityScreen}
        options={{headerTitle: '액티비티'}}
      />
      <ActivityStack.Screen
        name={activityNavigations.ACTIVITY_MAP}
        component={ActivityMapScreen}
        options={{headerTitle: '강릉시의 맞춤형 액티비티 확인!'}}
      />
      <ActivityStack.Screen
        name={activityNavigations.ACTIVITY_SEARCH}
        component={ActivitySearchScreen}
        options={{headerTitle: '장소 검색'}}
      />
      <ActivityStack.Screen
        name={activityNavigations.ACTIVITY_PLACE_DETAIL}
        component={ActivityPlaceDetailScreen}
        options={{headerTitle: '장소 상세 정보'}}
      />
      <ActivityStack.Screen
        name={activityNavigations.ACTIVITY_WEATHER}
        component={ActivityWeatherScreen}
        options={{headerTitle: 'Ac.T AI 추천 결과'}}
      />
      <ActivityStack.Screen
        name={activityNavigations.ACTIVITY_ACCOMMODATION}
        component={ActivityAccommodationScreen}
        options={{headerTitle: '강릉시의 숙박시설 살펴보기!'}}
      />
    </ActivityStack.Navigator>
  );
}

export default ActivityNavigator;
