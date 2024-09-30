import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function AIDetailScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {'(업체명), 액티비티 여행 추천 결과입니다.'}
      </Text>
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

export default AIDetailScreen;
