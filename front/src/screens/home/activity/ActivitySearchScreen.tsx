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
import {StackNavigationProp} from '@react-navigation/stack';
import {colors} from '../../../constants/colors';
import {activityNavigations} from '../../../constants/navigations';
import {
  placeDetails,
  ActivityStackParamList,
} from './ActivityPlaceDetailScreen';

type ActivitySearchScreenNavigationProp = StackNavigationProp<
  ActivityStackParamList,
  typeof activityNavigations.ACTIVITY_SEARCH
>;

const ActivitySearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState(placeDetails);
  const navigation = useNavigation<ActivitySearchScreenNavigationProp>();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = placeDetails.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(placeDetails);
    }
  };

  const renderResultItem = ({item}: {item: (typeof placeDetails)[0]}) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() =>
        navigation.navigate(activityNavigations.ACTIVITY_PLACE_DETAIL, {
          placeName: item.name,
          placeType: item.category,
          imageUrl: item.imageUrl,
        })
      }>
      <View style={styles.iconContainer}>
        <Image source={{uri: item.imageUrl}} style={styles.locationIcon} />
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
            source={require('../../../assets/icons/activity/search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredResults} // 검색 결과는 임시 데이터
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
    padding: 0,
    borderBottomWidth: 20,
    borderBottomColor: colors.WHITE,
  },
  iconContainer: {
    marginRight: 10,
  },
  locationIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
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

export default ActivitySearchScreen;
