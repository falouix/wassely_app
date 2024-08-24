import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import StoreCard from '@/components/stores/StoreCard'; // Import the StoreCard component

const { width: screenWidth } = Dimensions.get('window');
const dynamicWidth = screenWidth === 360 ? 150 : 170;

const allStoresData = [
  { imageSource: require('../../assets/home/stores/store1.png'), title: "Store 1", description: "Short description about Store 1." },
  { imageSource: require('../../assets/home/stores/store2.png'), title: "Store 2", description: "Short description about Store 2." },
  // Add all store data here
];

export default function StoresScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>All Stores</Text>
        <View style={styles.storeContainer}>
          {allStoresData.map((store, index) => (
            <StoreCard
              key={index}
              imageSource={store.imageSource}
              title={store.title}
              description={store.description}
              onPress={() => console.log(`Visit ${store.title}`)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  storeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
});
