import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../../constants/colors';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  // 임시 검색 결과 (데이터셋을 연결할 때 이 부분을 업데이트 가능)
  const tempResults = [
    {
      id: '1',
      name: '스타벅스 영등포 신길점',
      distance: '2.0km',
      category: '카페',
      address: '대한민국 성남시 000동 000, 000길',
      imageUrl:
        'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',
    },
    {
      id: '2',
      name: '스타벅스 영등포 신길점',
      distance: '2.0km',
      category: '카페',
      address: '대한민국 성남시 000동 000, 000길',
      imageUrl:
        'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o',
    },
    {
      id: '3',
      name: '스타벅스 영등포 신길점',
      distance: '2.0km',
      category: '카페',
      address: '대한민국 성남시 000동 000, 000길',
      imageUrl:
        'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    },
  ];

  const handleSearch = query => {
    setSearchQuery(query);
    // 실제 검색 로직을 나중에 구현 (백엔드 연결 시)
  };

  const renderResultItem = ({item}) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() =>
        navigation.navigate('Detail', {
          // 클릭 시 DetailScreen으로 이동
          placeName: item.name, // 장소 이름 전달
          placeType: item.category, // 장소 유형 전달
          address: item.address, // 장소 주소 전달
          imageUrl: item.imageUrl, // 임시 이미지 URL 전달
        })
      }>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../../../assets/logo.png')}
          style={styles.locationIcon}
        />
      </View>
      <View>
        <Text style={styles.resultTitle}>{item.name}</Text>
        <Text style={styles.resultInfo}>
          {item.distance} | {item.category} | {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어 입력"
          placeholderTextColor={colors.GRAY_500}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={require('../../../../assets/icons/home/activity/search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tempResults} // 검색 결과는 임시 데이터
        renderItem={renderResultItem}
        keyExtractor={item => item.id}
        style={styles.resultList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    borderRadius: 8,
    backgroundColor: colors.GRAY_100,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.BLACK,
  },
  searchButton: {
    padding: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: colors.BLACK,
  },
  resultList: {
    flex: 1,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_200,
  },
  iconContainer: {
    marginRight: 10,
  },
  locationIcon: {
    width: 24,
    height: 24,
    tintColor: colors.BLUE_MAIN,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  resultInfo: {
    fontSize: 14,
    color: colors.GRAY_500,
  },
});

export default SearchScreen;
