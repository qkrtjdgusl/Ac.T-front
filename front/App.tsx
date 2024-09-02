import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

import HomeScreen from './src/screens/bar/HomeScreen';
import MyFavoriteScreen from './src/screens/bar/MyFavoriteScreen';
import ChatScreen from './src/screens/bar/ChatScreen';
import ActivityScreen from './src/screens/home/ActivityScreen';
import PostScreen from './src/screens/home/PostScreen';
import StoreScreen from './src/screens/home/StoreScreen';
import EventScreen from './src/screens/home/EventScreen';
import MateScreen from './src/screens/home/MateScreen';

// Tab Navigator 생성
const Tab = createBottomTabNavigator();
// Stack Navigator 생성
const HomeStack = createStackNavigator();

// HomeStackNavigator 컴포넌트 생성
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen} //추후 DrawerNavigator로 변경해야 함
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerTitle: '액티비티',
        }}
      />
      <HomeStack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerTitle: '게시판',
        }}
      />
      <HomeStack.Screen
        name="Mate"
        component={MateScreen}
        options={{
          headerTitle: '메이트',
        }}
      />
      <HomeStack.Screen
        name="Store"
        component={StoreScreen}
        options={{
          headerTitle: '스토어',
        }}
      />
      <HomeStack.Screen
        name="Event"
        component={EventScreen}
        options={{
          headerTitle: '이벤트',
        }}
      />
    </HomeStack.Navigator>
  );
};

// App 컴포넌트
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="MyFavorite"
          component={MyFavoriteScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./src/assets/icons/bar/myfavorite.png')}
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
                source={require('./src/assets/icons/bar/home.png')}
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
                source={require('./src/assets/icons/bar/chat.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
