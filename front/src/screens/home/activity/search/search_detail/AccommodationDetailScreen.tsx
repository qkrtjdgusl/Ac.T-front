import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function AccommodationDetailScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'리조트 Resorts'}</Text>
    </View>
  );
}

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

export default AccommodationDetailScreen;
