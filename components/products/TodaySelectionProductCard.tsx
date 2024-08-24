import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface TodaySelectionProductCardProps {
  imageSource: any;
  label: string;
  onPress: () => void;
}

const TodaySelectionProductCard: React.FC<TodaySelectionProductCardProps> = ({ imageSource, label, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={imageSource} style={styles.imageBackground}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  imageBackground: {
    height: 350,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
});

export default TodaySelectionProductCard;
