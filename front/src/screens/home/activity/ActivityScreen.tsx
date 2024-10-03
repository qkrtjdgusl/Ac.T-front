import React from 'react';
import {colors} from '../../../constants/colors';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {activityNavigations} from '../../../constants/navigations';
import {StackScreenProps} from '@react-navigation/stack';
import {ActivityStackParamList} from '../../../navigations/home/ActivityNavigator';

type ActivityScreenProps = StackScreenProps<
  ActivityStackParamList,
  typeof activityNavigations.ACTIVITY_MAIN
>;

const ActivityScreen = ({navigation}: ActivityScreenProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate(activityNavigations.ACTIVITY_MAP)}>
        <Image
          source={require('../../../assets/icons/activity/map.png')}
          style={styles.mapIcon}
        />
      </TouchableOpacity>

      {/* 추가된 기존 버튼들 */}
      <TouchableOpacity
        style={[styles.floatingButton, styles.searchButton]}
        onPress={() =>
          navigation.navigate(activityNavigations.ACTIVITY_SEARCH)
        }>
        <Image
          source={require('../../../assets/icons/activity/search.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5EBF9',
  },
  mapButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    bottom: 70,
  },
  mapIcon: {
    width: '100%',
    height: '100%',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.BLUE_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    right: 20,
    bottom: 90,
  },
  searchButton: {
    bottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.WHITE,
  },
});

export default ActivityScreen;
