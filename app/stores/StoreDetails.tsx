// StoreDetails.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ProductCard from '@/components/products/ProductCard'; // Adjust the import path if necessary

export default function StoreDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { store } = route.params;

  const handleProductPress = (product: any) => {
    console.log('product',product)
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Store Banner */}
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  storeInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: '#666',
  },
  address: {
    fontSize: 16,
    color: '#333',
  },
  contact: {
    fontSize: 16,
    color: '#333',
  },
  filtersContainer: {
    marginBottom: 16,
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
  },
  productsContainer: {
    paddingBottom: 16,
  },
});
