import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

interface CategoryCardProps {
  imageSource: any;
  label: string;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSource, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardButton} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.cardButtonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    backgroundColor: '#d47091',
    width: 170,
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    marginTop: 10,
  },
  cardButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default CategoryCard;
