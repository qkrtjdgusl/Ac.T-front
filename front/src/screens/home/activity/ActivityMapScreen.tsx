import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {colors} from '../../../constants/colors';

function ActivityMapScreen({}) {
  const activities = [
    {
      id: '1',
      category: '서핑',
      places: [
        {
          id: '1',
          name: '요서프',
          distance: '2.0km',
          category: '서핑',
          address: '강원특별자치도 강릉시 주문진읍 주문진북로 222-30',
        },
        {
          id: '2',
          name: '크러쉬서프',
          distance: '3.0km',
          category: '서핑',
          address: '강원특별자치도 강릉시 연곡면 영진길 84',
        },
      ],
    },
    {
      id: '2',
      category: '스노클링',
      places: [
        {
          id: '1',
          name: '소돌해변',
          distance: '2.3km',
          category: '스노클링',
          address: '강원특별자치도 강릉시 주문진읍 주문리',
        },
        {
          id: '2',
          name: '사천진해수욕장',
          distance: '3.4km',
          category: '스노클링',
          address: '강원특별자치도 강릉시 사천면 사천진리',
        },
      ],
    },
  ];

  // 장소 렌더링
  const renderPlaceItem = ({item}) => (
    <View style={styles.placeItem}>
      <View style={styles.placeInfo}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.placeDetails}>
          {item.distance} | {item.category} | {item.address}
        </Text>
      </View>
    </View>
  );

  // 액티비티 카테고리 렌더링
  const renderActivityCategory = ({item}) => (
    <View style={styles.activitySection}>
      <Text style={styles.activityCategory}>{item.category}</Text>
      <FlatList
        data={item.places}
        renderItem={renderPlaceItem}
        keyExtractor={place => place.id}
        contentContainerStyle={styles.placeList}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        renderItem={renderActivityCategory}
        keyExtractor={activity => activity.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: 20,
    textAlign: 'center',
  },
  activitySection: {
    marginBottom: 30,
  },
  activityCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLUE_MAIN,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colors.BLUE_PRESSED,
    borderWidth: 3,
    borderRadius: 20,
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  placeList: {
    paddingHorizontal: 15,
  },
  placeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_300,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.BLUE_MAIN,
    marginRight: 10,
  },
  placeInfo: {
    flex: 1,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  placeDetails: {
    fontSize: 14,
    color: colors.GRAY_500,
  },
});

export default ActivityMapScreen;
