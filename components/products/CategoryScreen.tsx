// CategoryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface CategoryScreenProps {
  categoryName: string;
  items: { id: number; title: string; description: string }[];
}

const CategoryScreen: React.FC<CategoryScreenProps> = ({ categoryName, items }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default CategoryScreen;
