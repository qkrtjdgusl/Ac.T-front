import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {colors} from '../../../constants/colors';

const ActivityWeatherScreen = ({route}) => {
  const {placeName} = route.params;

  const dates = [
    {
      id: '1',
      date: '2024 / 9 / 23',
      icon: require('../../../assets/icons/activity/weather/rain.png'),
    },
    {
      id: '2',
      date: '2024 / 9 / 25',
      icon: require('../../../assets/icons/activity/weather/no_cloud.png'),
    },
    {
      id: '3',
      date: '2024 / 9 / 22',
      icon: require('../../../assets/icons/activity/weather/hard_rain.png'),
    },
    {
      id: '4',
      date: '2024 / 9 / 27',
      icon: require('../../../assets/icons/activity/weather/rain.png'),
    },
    {
      id: '5',
      date: '2024 / 9 / 20',
      icon: require('../../../assets/icons/activity/weather/snow.png'),
    },
    {
      id: '6',
      date: '2024 / 9 / 21',
      icon: require('../../../assets/icons/activity/weather/bolt.png'),
    },
  ];

  // 리스트 렌더링
  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      {/* 아이콘이 있는 경우 아이콘을 보여주고, 없으면 빈 View */}
      <View style={styles.iconContainer}>
        {item.icon ? (
          <Image source={item.icon} style={styles.weatherIcon} />
        ) : (
          <View style={styles.emptyIcon} />
        )}
      </View>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 상단 제목과 텍스트 */}
      <View style={styles.header}>
        <Text style={styles.title}>{placeName}, 액티비티 여행</Text>
        <Text style={styles.subtitle}>
          <Text style={styles.highlightText}>추천 결과</Text>입니다.
        </Text>
        <Text style={styles.description}>
          Ac.T 가 알려준 맞춤 계획으로 여행을 떠나보세요
        </Text>
      </View>

      {/* 날짜 리스트 */}
      <FlatList
        data={dates}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />} // 항목 사이의 선
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  highlightText: {
    color: colors.BLUE_MAIN,
  },
  description: {
    fontSize: 14,
    color: colors.GRAY_500,
    marginTop: 5,
  },
  list: {
    paddingBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherIcon: {
    width: 30,
    height: 30,
    tintColor: colors.BLUE_MAIN,
  },
  emptyIcon: {
    width: 30,
    height: 30,
  },
  dateText: {
    fontSize: 16,
    color: colors.BLACK,
  },
  separator: {
    height: 1,
    backgroundColor: colors.GRAY_300,
    marginVertical: 10,
  },
});

export default ActivityWeatherScreen;
