import React from 'react';
import { View,Pressable, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ProductCardProps {
  image: ImageSourcePropType; // Ensures the image is a valid source type
  name: string;
  onPress: () => void;
}


export default function ProductCard({ image, name, onPress, price, seller }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('StoreDetails', {
      store: {
        image: require('../../assets/home/stores/banner.png'),
        name: name,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.seller}>seller: {seller}</Text>
      <Pressable style={styles.button} onPress={() => console.log('Button Pressed')}>
        <Text style={styles.buttonText}>Learn More</Text>
      </Pressable>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 155,
    height: 260,
    margin: 10,
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  price: {
    textAlign: 'right',
    paddingLeft: 15,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: '700',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5
  },

  seller: {
    fontSize: 12,
    paddingLeft: 6
  },
  visit: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'right'
  },

  description: {
    fontSize: 14,
    marginTop: 4,
    paddingLeft: 3
  },
  button: {
    borderColor: '#1e1e27', // Border color
    borderWidth: 1, // Border thickness
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop:5,
    marginBottom:3,
    backgroundColor: 'transparent', // Transparent background
  },
  buttonText: {
    color: '#1e1e27', // Text color
    fontSize: 14,
    fontWeight:'700',
    textAlign: 'center',
  },
});
