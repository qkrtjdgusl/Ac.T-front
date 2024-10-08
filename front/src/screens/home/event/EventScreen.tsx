import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default EventScreen;
