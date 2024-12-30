import React from 'react';
import { Image, ImageSourcePropType, StyleSheet,TouchableOpacity } from 'react-native';
import { View, Text } from '@/components/Themed'; // Using Themed components
import { useNavigation } from '@react-navigation/native';


export default function CardCategory({ imageSource, title,label, description, onPress,buttonTextStyle }) {
  const navigation = useNavigation();

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
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.buttonTextStyle}>{label}</Text>
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
    height:200,
    marginRight:15,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 23,
    marginTop: -41,
    backgroundColor: 'red', // background in CSS becomes backgroundColor in React Native
    width: '100%',
    textAlign: 'center',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    fontWeight:'bold',
    color:'white'

  },
});

