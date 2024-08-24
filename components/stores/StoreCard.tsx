import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StoreCard({ imageSource, title, description, onPress }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('StoreDetails', {
      store: {
        bannerImage: require('../../assets/home/stores/banner.png'),
        profileImage: imageSource,
        name: title,
        description: description,
        address: 'Store Address here',
        contact: '+123456789',
        products: [
          { image: require('../../assets/home/stores/product1.png'), name: 'Product 1' },
          { image: require('../../assets/home/stores/product2.png'), name: 'Product 2' },
        ],
      },
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
});
