import React from 'react';
import { Image,Dimensions, ImageSourcePropType, StyleSheet,TouchableOpacity } from 'react-native';
import { View, Text } from '@/components/Themed'; // Using Themed components
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;
const dynamicWidth = screenWidth * 0.8; // 80% of screen width
export default function Card({ imageSource, title,label, description, onPress, labelColor }) {
  const navigation = useNavigation();

  const isWideScreen = screenWidth > 600;
  const handlePress = () => {
    navigation.navigate('CategoryDetails', {
      category: {
        bannerImage: require('@/assets/home/stores/banner.png'),
        profileImage: imageSource,
        name: label,
        description: description,
        stores: [
          { image: require('@/assets/home/stores/product1.png'), name: 'stores 1' },
          { image: require('@/assets/home/stores/product2.png'), name: 'stores 2' },
        ],
      },
    });
  };
  return (
    <TouchableOpacity  style={[styles.card, isWideScreen && styles.cardWide]} onPress={handlePress}>
      <Image source={imageSource} 
                  style={[styles.image, isWideScreen && styles.imageWide]}/>
      <Text style={[styles.label, isWideScreen && styles.labelWide,{backgroundColor:labelColor}]} >{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    width:170,
    height:170,
    marginRight:7,
  },
  cardWide: {
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    width:270,
    height:270,
    marginRight:7,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 15,
    marginBottom: 10,
  },
  imageWide: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    backgroundColor: 'trensparant', // background in CSS becomes backgroundColor in React Native
    width: '100%',
    textAlign: 'center',
    paddingVertical:3,
    borderRadius:15,
    color:'black',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,

  },
  labelWide: {
    fontSize: 18,
    backgroundColor: 'trensparant', // background in CSS becomes backgroundColor in React Native
    width: '100%',
    textAlign: 'center',
    paddingVertical:3,
    borderRadius:15,
    color:'black',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,

  },
});

