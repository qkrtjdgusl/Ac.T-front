import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MapSvg} from '../../../assets/svg';

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activity Screen</Text>
      <MapSvg width={100} height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D5EBF9',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default ActivityScreen;
