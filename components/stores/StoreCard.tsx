import React from 'react';
import { Dimensions,View, Pressable, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';  // Import FontAwesome5 for newer icons
import { PrimaryBtn } from '../buttons/PrimaryBtn';

const screenWidth = Dimensions.get('window').width;
export default function StoreCard({ imageSource, title, description, onPress }) {
const dynamicWidth = screenWidth * 0.8; // 80% of screen width
const navigation = useNavigation();
  const isWideScreen = screenWidth > 600;
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
    <View style={[styles.card, isWideScreen && styles.cardWide]}>


      <Image source={imageSource} style={styles.image} />
      {/* Store Name and Icon */}
      <View style={styles.titleContainer}>
        <FontAwesome5 name="store-alt" size={16} color="#19B0A5" style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.footerContainer}>
          <PrimaryBtn lightColor="#19B0A5" btnWidth={100} btnHeigth={26} darkColor="#19B0A5" onPress={handlePress} isLoading={false}>
            <FontAwesome5 name="eye" size={12} color="#000" style={styles.icon} />
            <Text>Visit</Text>
          </PrimaryBtn>
        <PrimaryBtn lightColor="#de3970" textColor="#000" btnWidth={40} btnHeigth={26} darkColor="#de3970" onPress={handlePress} isLoading={false}>
          <FontAwesome5 name="heart" size={12} color="#FFF" style={[styles.icon,{marginRight:5}]} />
        </PrimaryBtn>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 155,
    height: 267,
    margin: 3,
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  cardWide: {
    width: 350,
    height: 267,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  titleContainer: {
    flexDirection: 'row',  // Aligns icon and title in a row
    alignItems: 'center',  // Vertically centers the icon with the title
    paddingLeft: 5,
    paddingBottom: 5,
  },
  icon: {
    margin: 5,  // Adds spacing between icon and text
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    height: 50,
    marginBottom: 5,
    paddingRight: 10,
  },
  description: {
    fontSize: 12,
    marginTop: 4,
    paddingLeft: 3,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom:10
  },
  button: {
    borderColor: '#1e1e27', // Border color
    borderWidth: 1, // Border thickness
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 3,
    backgroundColor: 'transparent', // Transparent background
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#1e1e27', // Text color
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
});
