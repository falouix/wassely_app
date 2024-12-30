import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ShopNowCard = ({ imageSource, title, description, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </View>
        </View>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      elevation: 5, // For Android shadow
      width: 400, // Fixed width for uniformity
      height: 200, // Optional: consistent height
      marginVertical: 10,
      alignSelf: 'center', // Center the card horizontally
      margin:10,
    },
    textContainer: {
      flex: 1,
      padding: 15,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    description: {
      fontSize: 14,
      color: '#555',
    },
    button: {
      backgroundColor: '#19b0a514',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 10,
      borderColor: '#19b0a5',
      borderRightWidth:1,
      borderLeftWidth:1,
      alignSelf: 'flex-start',
    },
    buttonText: {
      fontSize: 14,
      color: '#19b0a5',
      fontWeight: '600',
    },
    image: {
      width: 160, // Fixed width for the image
      height: '100%', // Adjust height to match the card height
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
  });

export default ShopNowCard;
