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
import {colors} from '../../../constants/colors';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]); // 검색 결과를 저장하는 상태

  // 검색어가 변경될 때 호출되는 함수
  const handleSearch = query => {
    setSearchQuery(query);
    // 실제 검색 기능 구현 (나중에 데이터셋을 연결할 수 있음)
    // 예: setResults(filteredData);
  };

  // 임시 검색 결과 (데이터셋을 연결할 때 이 부분을 업데이트 가능)
  const tempResults = [
    {
      id: '1',
      name: '스타벅스 영등포 신길점',
      distance: '2.0km',
      category: '카페',
      address: '대한민국 성남시 000동 000, 000길',
    },
    {
      id: '2',
      name: '스타벅스 영등포 신길점',
      distance: '2.0km',
      category: '카페',
      address: '대한민국 성남시 000동 000, 000길',
    },
    {
      id: '3',
      name: '스타벅스 영등포 신길점',
      distance: '2.0km',
      category: '카페',
      address: '대한민국 성남시 000동 000, 000길',
    },
  ];

  const renderResultItem = ({item}) => (
    <TouchableOpacity style={styles.resultItem}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../../assets/logo.png')}
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
            source={require('../../../assets/icons/home/activity/search.png')}
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
