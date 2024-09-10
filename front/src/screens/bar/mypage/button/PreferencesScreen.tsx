import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PreferencesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preferences Screen</Text>
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

export default PreferencesScreen;
