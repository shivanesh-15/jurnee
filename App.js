import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherCard from './WeatherCard';

function App() {
  return (
    <View style={styles.container}>
      <WeatherCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  }
});

export default App;