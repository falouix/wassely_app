import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type CategoryScreenProps = {
  route: RouteProp<{ params: { category: string } }, 'params'>;
};

const CategoryScreen: React.FC<CategoryScreenProps> = ({ route }) => {
  const category = route?.params?.category || 'Default Category';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      {/* Add content related to the category */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
