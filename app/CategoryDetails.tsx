import React, { useState } from 'react';
import { View,Dimensions, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ThemedText as ThemedText } from '@/components/ThemedText'; // Adjust this import if ThemedText is defined elsewhere
import ProductCard from '@/components/products/ProductCard'; // Adjust the import path if necessary
import CardCategory from '@/components/CardCategory'; // Assuming you have a Card component

const screenWidth = Dimensions.get('window').width;
const dynamicWidth = screenWidth * 0.8; // 80% of screen width

export default function CategoryDetails() {
  
  const isWideScreen = screenWidth > 600;
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const topStores = [
    { id: '1', name: 'Store 1', image: require('@/assets/home/stores/store1.png') },
    { id: '2', name: 'Store 2', image: require('@/assets/home/stores/store2.png') },
    { id: '3', name: 'Store 3', image: require('@/assets/home/stores/store2.png') },
  ];

  const productsData = [
    { id: '1',price: '33 DT',seller: 'Seller 1', name: 'Product 1', image: require('@/assets/home/products/product1.png') },
    { id: '2',price: '23 DT',seller: 'Seller 2', name: 'Product 2', image: require('@/assets/home/products/product2.png') },
    { id: '3',price: '46 DT',seller: 'Seller 3', name: 'Product 3', image: require('@/assets/home/products/product3.png') },
    { id: '4',price: '89 DT',seller: 'Seller 4', name: 'Product 4', image: require('@/assets/home/products/product1.png') },
    { id: '5',price: '09 DT',seller: 'Seller 5', name: 'Product 5', image: require('@/assets/home/products/product2.png') },
    { id: '6',price: '25 DT',seller: 'Seller 6', name: 'Product 6', image: require('@/assets/home/products/product3.png') },
  ];
  
  const visibleProducts = productsData.slice(0, 4); // Show only first 4 products
  const categories = [
    { id: '1', name: 'Robe de mariage', icon: require('@/assets/categories/1.png') },
    { id: '2', name: 'Maquillage & Coiffure', icon: require('@/assets/categories/2.png') },
    { id: '3', name: 'Onglerie', icon: require('@/assets/categories/3.png') },
    { id: '4', name: 'Bijoux', icon: require('@/assets/categories/4.png') },
    { id: '5', name: 'Henna', icon: require('@/assets/categories/5.png') },
    { id: '6', name: 'Trousseau', icon: require('@/assets/categories/6.png') },
    { id: '7', name: 'Hammem', icon: require('@/assets/categories/7.png') },
  ];

  const renderStoreItem = ({ item }: any) => (
    <TouchableOpacity style={styles.storeItem}>
      <Image source={item.image} style={styles.storeImage} />
      <Text style={styles.storeName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }: any) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }: any) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Categories Grid */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (

            <CardCategory
            key={category.id}
              imageSource={category.icon}
              label={category.name}
              onPress={() => navigation.navigate('CategoryScreen', {
                category: {  // Wrap inside 'category'
                  bannerImage: styles.categoryIcon,
                  profileImage: styles.categoryIcon,
                  name: category.name,
                  description: category.name,
                  products: [
                  ],
                }
              })}
              buttonStyle={styles.label}
              buttonTextStyle={styles.label}
            />

          ))}
        </View>
      </ScrollView>

      {/* Top Stores Section */}
      <View style={styles.section2}>
        <View style={[styles.requestTitleContaioner, styles.organizeTitleContainer]}>
          <ThemedText style={[styles.requestTitle]}>
          Top Products
          </ThemedText>
        </View>
        <View style={[styles.section2Container, isWideScreen && styles.gridContainerWide]}>
        {visibleProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              seller={product.seller}
              onPress={() => console.log(`Selected ${product.name}`)}
            />
          ))}
        </View>
      </View>

      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.filterButtonText}>Open Filters</Text>
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalBackground}>
          <View style={styles.bottomModalContainer}>
            <Text style={styles.modalTitle}>Filters</Text>
            {/* Your filter options here */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listContainer: {
    paddingBottom: 16,
  },
  storeItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  storeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  storeName: {
    marginTop: 8,
    fontSize: 14,
  },
  productItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
  },
  categoriesGrid: {
    flexDirection: 'row', // To align items horizontally
    marginVertical: 16,
  },
  categoryItem: {
    width: 200,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  categoryIcon: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  filterButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 16,
    alignSelf: 'center',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Align the popup to the bottom
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomModalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop:-50
  },
  label: {
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    fontWeight:'bold',
    color:'black'
  },
  organizeTitleContainer: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  section2Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
