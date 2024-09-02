import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../constants/colors';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.actText}>Ac.T는 공사중 :D</Text>
      <View style={styles.banner1}>
        <Text style={styles.bannerText}>광고 배너1</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Activity')}>
          <Image
            source={require('../../assets/icons/home/activity.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>액티비티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Post')}>
          <Image
            source={require('../../assets/icons/home/post.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>게시판</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Mate')}>
          <Image
            source={require('../../assets/icons/home/mate.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>메이트</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Store')}>
          <Image
            source={require('../../assets/icons/home/store.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>스토어</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Event')}>
          <Image
            source={require('../../assets/icons/home/event.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>이벤트</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.banner2}>
        <Text style={styles.bannerText}>광고 배너2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  actText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.BLUE_MAIN,
    marginBottom: 10,
  },
  banner1: {
    width: '90%',
    height: 100,
    backgroundColor: colors.GRAY_200,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 15,
  },
  banner2: {
    width: '90%',
    height: 100,
    backgroundColor: colors.GRAY_200,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 15,
  },
  bannerText: {
    color: colors.GRAY_700,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: colors.BLACK,
  },
  buttonImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
});

export default HomeScreen;
