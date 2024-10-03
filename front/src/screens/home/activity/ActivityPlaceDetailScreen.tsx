import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../../constants/colors';
import {activityNavigations} from '../../../constants/navigations';
import {StackScreenProps} from '@react-navigation/stack';

export type ActivityStackParamList = {
  [activityNavigations.ACTIVITY_SEARCH]: undefined;
  [activityNavigations.ACTIVITY_PLACE_DETAIL]: {
    placeName: string;
    placeType: string;
    imageUrl: string;
  };
  [activityNavigations.ACTIVITY_WEATHER]: {
    placeName: string;
  };
  [activityNavigations.ACTIVITY_ACCOMMODATION]: undefined;
  [activityNavigations.ACTIVITY_MAP]: undefined;
};

export const placeDetails = [
  {
    id: '1',
    name: '오션플레이호',
    distance: '1.0km',
    category: '스노클링',
    address: '강원특별자치도 강릉시 사천면 진리항구길 47 어촌체험마을 1층',
    imageUrl:
      'https://fastly.picsum.photos/id/184/4288/2848.jpg?hmac=l0fKWzmWf6ISTPMEm1WjRdxn35sg6U3GwZLn5lvKhTI',
  },
  {
    id: '2',
    name: '서프홀릭강릉',
    distance: '2.0km',
    category: '서핑',
    address: '강원특별자치도 강릉시 옥계면 금진리 210',
    imageUrl:
      'https://fastly.picsum.photos/id/79/2000/3011.jpg?hmac=TQsXWj0kLBLRXbSAh2Pygog1-cOefqpjEoKyl0uD3tg',
  },
  {
    id: '3',
    name: '플라밍고 서프',
    distance: '3.0km',
    category: '서핑',
    address: '강원특별자치도 강릉시 사천면 해안로 904-4',
    imageUrl:
      'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  },
];

type ActivityPlaceDetailScreenProps = StackScreenProps<
  ActivityStackParamList,
  typeof activityNavigations.ACTIVITY_PLACE_DETAIL
>;

const ActivityPlaceDetailScreen = ({
  navigation,
  route,
}: ActivityPlaceDetailScreenProps) => {
  const {placeName, placeType, imageUrl} = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* 상단 이미지 */}
      <Image source={{uri: imageUrl}} style={styles.image} />

      {/* 장소 정보 */}
      <View style={styles.placeContainer}>
        <Text style={styles.placeName}>{placeName}</Text>
        <Text style={styles.placeType}>{placeType}</Text>
      </View>

      {/* AI 추천 섹션 */}
      <View style={styles.recommendationContainer}>
        <View style={styles.recommendationContent}>
          <Text style={styles.recommendationText}>
            강릉조와 님을 위한 Ac.T AI 추천
          </Text>
          <View style={styles.datesContainer}>
            <Text style={styles.date}>9/23</Text>
            <Text style={styles.date}>9/25</Text>
            <Text style={styles.date}>9/22</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(activityNavigations.ACTIVITY_WEATHER, {
              placeName,
            })
          }>
          <Image
            source={require('../../../assets/icons/activity/arrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* 숙박 업소 정보 섹션 */}
      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>리조트</Text>
            <Text style={styles.categoryData}>27</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>게스트하우스</Text>
            <Text style={styles.categoryData}>30</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>펜션</Text>
            <Text style={styles.categoryData}>10</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>호텔</Text>
            <Text style={styles.categoryData}>19</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(activityNavigations.ACTIVITY_ACCOMMODATION)
          }>
          <Image
            source={require('../../../assets/icons/activity/arrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* 감정 분석 결과 버튼 */}
      <TouchableOpacity style={styles.analysisButton}>
        <Text style={styles.analysisButtonText}>총평: 30/100점</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  image: {
    width: '100%',
    height: 200,
  },
  placeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_200,
  },
  placeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  placeType: {
    fontSize: 18,
    color: colors.BLUE_MAIN,
    alignSelf: 'center',
  },
  recommendationContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: 8,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendationContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.BLACK,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    fontSize: 20,
    color: colors.BLACK,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoTextContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  categoryBox: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  categoryData: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: colors.BLACK,
  },
  analysisButton: {
    backgroundColor: colors.BLACK,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  analysisButtonText: {
    fontSize: 16,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});

export default ActivityPlaceDetailScreen;
