import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors} from '../../../constants/colors';

// 리뷰 데이터를 설정합니다.
const reviews = {
  hotel: [
    {
      id: '1',
      title: '세인트존스 호텔',
      body: '강원특별자치도 강릉시 창해로 307',
      reviewerName: '아고다 회원',
      date: '2024.10.1',
      avatar:
        'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    },
    {
      id: '2',
      title: '스카이베이 호텔 경포',
      body: '강원특별자치도 강릉시 해안로 476',
      reviewerName: '여기어때 회원',
      date: '2024.09.15',
      avatar:
        'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    },
  ],
  pension: [
    {
      id: '3',
      title: '폴라리스700',
      body: '강원특별자치도 평창군 대관령면 삼현동1길 14',
      reviewerName: '야놀자 회원',
      date: '2024.08.13',
      avatar:
        'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',
    },
  ],
};

// 개별 리뷰 카드 렌더링 함수
const renderReviewCard = ({item}) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      {/* 별점 아이콘 (임시로 별 이미지 사용) */}
      <View style={styles.stars}>
        <Image
          source={require('../../../assets/icons/activity/filled_star.png')}
          style={styles.starIcon}
        />
        <Image
          source={require('../../../assets/icons/activity/filled_star.png')}
          style={styles.starIcon}
        />
        <Image
          source={require('../../../assets/icons/activity/filled_star.png')}
          style={styles.starIcon}
        />
        <Image
          source={require('../../../assets/icons/activity/filled_star.png')}
          style={styles.starIcon}
        />
        <Image
          source={require('../../../assets/icons/home/event.png')}
          style={styles.starIcon}
        />
      </View>

      {/* 호텔/리조트 제목과 리뷰 */}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>

      {/* 리뷰어 정보 */}
      <View style={styles.reviewerInfo}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <View>
          <Text style={styles.reviewerName}>{item.reviewerName}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </View>
  </View>
);

const ActivityAccommodationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>호텔</Text>
      <FlatList
        data={reviews.hotel}
        renderItem={renderReviewCard}
        keyExtractor={item => item.id}
        horizontal={false}
        scrollEnabled={false} // FlatList의 자체 스크롤을 비활성화
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>펜션</Text>
      <FlatList
        data={reviews.pension}
        renderItem={renderReviewCard}
        keyExtractor={item => item.id}
        horizontal={false}
        scrollEnabled={false} // FlatList의 자체 스크롤을 비활성화
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: 10,
  },
  list: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5, // 안드로이드에서 그림자 효과
  },
  cardContent: {
    justifyContent: 'center',
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
    color: colors.GRAY_500,
    marginBottom: 10,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.GRAY_700,
  },
  date: {
    fontSize: 12,
    color: colors.GRAY_500,
  },
});

export default ActivityAccommodationScreen;
