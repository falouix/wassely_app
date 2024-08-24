// components/HelloWave.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HelloWave: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Wave!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default HelloWave;
