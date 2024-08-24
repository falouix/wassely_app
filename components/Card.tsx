import React from 'react';
import { Image, ImageSourcePropType, StyleSheet,TouchableOpacity } from 'react-native';
import { View, Text } from '@/components/Themed'; // Using Themed components

interface CardProps {
  label: string;
  onPress: () => void;
  imageSource: ImageSourcePropType; // Updated to use ImageSourcePropType for local and remote images
}

const Card: React.FC<CardProps> = ({ label, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    width:170,
    height:170,
    marginRight:15,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 23,
    marginTop: -41,
    backgroundColor: 'red', // background in CSS becomes backgroundColor in React Native
    width: '100%',
    textAlign: 'center',
  },
});

export default Card;
