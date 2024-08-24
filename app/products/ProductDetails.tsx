// ProductDetailsScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel'; // Import from react-native-reanimated-carousel
import { useRoute } from '@react-navigation/native';

interface Product {
  images: any[]; // Replace 'any' with a specific type if needed
  name: string;
  store: string;
  price: string;
  discount: string;
  description: string;
  similarProducts: Product[];
}

export default function ProductDetailsScreen() {
  const route = useRoute();
  const { product } = route.params as { product: Product };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Carousel */}
      <Carousel
        loop
        width={300}
        height={300}
        autoPlay
        data={product.images}
        renderItem={({ item }) => (
          <Image source={item} style={styles.carouselImage} />
        )}
        scrollAnimationDuration={1000}
      />

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productStore}>Store: {product.store}</Text>
        <Text style={styles.productPrice}>Price: {product.price}</Text>
        <Text style={styles.productDiscount}>Discount: {product.discount}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy / Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Similar Products */}
      <View style={styles.similarProductsContainer}>
        <Text style={styles.similarProductsTitle}>Similar Products</Text>
        <FlatList
          data={product.similarProducts}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.similarProductCard}>
              <Image source={item.images[0]} style={styles.similarProductImage} />
              <Text style={styles.similarProductName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.similarProductsList}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  detailsContainer: {
    marginVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productStore: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDiscount: {
    fontSize: 16,
    color: '#f00',
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  similarProductsContainer: {
    marginTop: 16,
  },
  similarProductsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  similarProductsList: {
    paddingBottom: 16,
  },
  similarProductCard: {
    backgroundColor: '#fff',
    marginRight: 16,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  similarProductImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  similarProductName: {
    fontSize: 16,
    textAlign: 'center',
  },
});
