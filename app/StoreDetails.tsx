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
    console.log(111)
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Store Banner */}
      <Image source={store.bannerImage} style={styles.banner} />

      {/* Store Profile Information */}
      <View style={styles.profileContainer}>
        <Image source={store.profileImage} style={styles.profileImage} />
        <View style={styles.storeInfo}>
          <Text style={styles.name}>{store.name}</Text>
          <Text style={styles.description}>{store.description}</Text>
          <Text style={styles.address}>Address: {store.address}</Text>
          <Text style={styles.contact}>Contact: {store.contact}</Text>
        </View>
      </View>

      {/* Filters Section */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filtersTitle}>Filters</Text>
        <View style={styles.filters}>
          {/* Example filter buttons, replace with your logic */}
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Category 1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Category 2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Category 3</Text></TouchableOpacity>
        </View>
      </View>

      {/* Products Grid */}
      <FlatList
        data={store.products}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            name={item.name}
            onPress={() => handleProductPress(item)}
          />
        )}
        contentContainerStyle={styles.productsContainer}
      />
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