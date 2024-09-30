import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../../../constants/colors';
import {HomeStackParamList} from '../../../../navigations/home/HomeStackParamList';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type DetailScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Detail'
>;

const DetailScreen = ({route}) => {
  // SearchScreen에서 전달된 데이터
  const {placeName, placeType, imageUrl} = route.params;
  const navigation = useNavigation<DetailScreenNavigationProp>();

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
            (닉네임) 님을 위한 Ac.T AI 추천
          </Text>
          <View style={styles.datesContainer}>
            <Text style={styles.date}>9/23</Text>
            <Text style={styles.date}>9/25</Text>
            <Text style={styles.date}>9/22</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AIDetail')}>
          <Image
            source={require('../../../../assets/icons/home/activity/arrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* 콘도, 게스트하우스, 펜션, 호텔 정보 섹션 */}
      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>콘도</Text>
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
          onPress={() => navigation.navigate('AccommodationDetail')}>
          <Image
            source={require('../../../../assets/icons/home/activity/arrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* 감정 분석 결과 버튼 */}
      <TouchableOpacity style={styles.analysisButton}>
        <Text style={styles.analysisButtonText}>[감정 분석 결과]</Text>
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

export default DetailScreen;
