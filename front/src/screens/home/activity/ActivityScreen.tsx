import React from 'react';
import {colors} from '../../../constants/colors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>시</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>강릉시</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>동해시</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>삼척시</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>속초시</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>원주시</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>춘천시</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>태백시</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>군</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>고성군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>양구군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>양양군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>영월군</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>인제군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>정선군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>철원군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>평창군</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>홍천군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>화천군</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {}}>
              <Text style={styles.buttonText}>횡성군</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton}>
        <Image
          source={require('../../../assets/icons/home/activity/plus.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.floatingButton, styles.searchButton]}>
        <Image
          source={require('../../../assets/icons/home/activity/search.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    alignItems: 'flex-start',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 120,
    justifyContent: 'flex-start',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: colors.BLUE_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  circleText: {
    color: colors.BLUE_MAIN,
    fontSize: 18,
    fontWeight: '900',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    width: '100%',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
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
    bottom: 90, // 첫 번째 버튼의 위치 설정
  },
  searchButton: {
    bottom: 20, // 두 번째 버튼을 첫 번째 버튼 아래에 위치
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.WHITE,
  },
});

export default ActivityScreen;
