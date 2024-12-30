import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ManageStores: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Stores</Text>
      {/* Add functionality for managing stores */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ManageStores;
