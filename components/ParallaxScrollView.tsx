// components/ParallaxScrollView.tsx
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

const ParallaxScrollView: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      <View style={styles.parallaxHeader}>
        <Text style={styles.headerText}>Parallax Header</Text>
      </View>
      {/* Your scrollable content goes here */}
      <View style={styles.content}>
        <Text>Content goes here</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
  },
  parallaxHeader: {
    height: 200,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
});

export default ParallaxScrollView;
