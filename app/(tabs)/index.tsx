import React, { useState, useEffect, useRef } from 'react'; // Import useState for managing state

import { useNavigation } from '@react-navigation/native';
import { Animated, Text, Dimensions, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'; // Import required components and APIs
import { ThemedText as ThemedText } from '@/components/ThemedText'; // Adjust this import if ThemedText is defined elsewhere
import Card from '@/components/Card'; // Assuming you have a Card component
import StoreCard from '@/components/stores/StoreCard'; // Assuming you have a StoreCard component

import ShopNowCard from '@/components/stores/ShopNowCard'; // Assuming you have a ShopNowCard component

import ProductCard from '@/components/products/ProductCard';
const screenWidth = Dimensions.get('window').width;
const dynamicWidth = screenWidth * 0.8; // 80% of screen width


export default function TabOneScreen() {

  const navigation = useNavigation();
  const isWideScreen = screenWidth > 600;

  const productsData = [
    { id: '1', price: '33 DT', seller: 'seller 1', name: 'Product 1', image: require('@/assets/home/products/product1.png') },
    { id: '2', price: '33 DT', seller: 'seller 2', name: 'Product 2', image: require('@/assets/home/products/product2.png') },
    { id: '3', price: '33 DT', seller: 'seller 3', name: 'Product 3', image: require('@/assets/home/products/product3.png') },
    { id: '4', price: '33 DT', seller: 'seller 4', name: 'Product 4', image: require('@/assets/home/products/product1.png') },
    { id: '5', price: '33 DT', seller: 'seller 5', name: 'Product 5', image: require('@/assets/home/products/product2.png') },
    { id: '6', price: '33 DT', seller: 'seller 6', name: 'Product 6', image: require('@/assets/home/products/product3.png') },
  ];

  const storesData = [
    { id: 1, title: 'Store 1', description: 'Best productsproducts products products', imageSource: require('@/assets/home/stores/store1.png') },
    { id: 2, title: 'Store 2', description: 'Quality items Quality items', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 3, title: 'Store 3', description: 'Affordable prices', imageSource: require('@/assets/home/stores/store1.png') },
    { id: 4, title: 'Store 4', description: 'Luxury goods', imageSource: require('@/assets/home/stores/store1.png') },
    { id: 5, title: 'Store 5', description: 'Wide variety', imageSource: require('@/assets/home/stores/store1.png') },
    { id: 6, title: 'Store 6', description: 'Exclusive items', imageSource: require('@/assets/home/stores/store1.png') },
    { id: 7, title: 'Store 7', description: 'Top brands', imageSource: require('@/assets/home/stores/store1.png') },
    { id: 8, title: 'Store 8', description: 'New arrivals', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 9, title: 'Store 9', description: 'Great discounts', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 10, title: 'Store 10', description: 'High quality', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 11, title: 'Store 11', description: 'Unique finds', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 12, title: 'Store 12', description: 'Customer favorites', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 13, title: 'Store 13', description: 'Trending now', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 14, title: 'Store 14', description: 'Popular items', imageSource: require('@/assets/home/stores/store2.png') },
    { id: 15, title: 'Store 15', description: 'Bestsellers', imageSource: require('@/assets/home/stores/store2.png') },
  ];
  const images = [

    { source: require('../../assets/home/banners/banner1.png') },

    { source: require('../../assets/home/banners/banner2.png') },

  ];

  useEffect(() => {

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollRef.current?.scrollTo({ x: nextIndex * 300, animated: true });
        return nextIndex;
        
      });

    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);

  }, [images.length]);

  const handleShowMoreNanner = () => {

    console.log('Show more clicked!');
    // You can navigate or handle the show more functionality here

  };



  const [visibleStores, setVisibleStores] = useState(storesData.slice(0, 4));
  const [scrollY] = useState(new Animated.Value(0));

  const visibleProducts = productsData.slice(0, 4); // Show only first 4 products

  const logoOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const logoTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });
  const handleShowMore = () => {
    if (storesData.length > 4) {
      setVisibleStores(storesData);
    }
  };



  const handlePress = (category: string) => {
    navigation.navigate('Category', { category });
  };




  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Animated.ScrollView onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      { useNativeDriver: true }
    )}
      scrollEventThrottle={16}>
      {/* Logo */}



      {/* banner images*/}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View>

          {/* Auto-scrolling banner images */}
          
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >

            <View style={styles.cardBannerContainer}>
              {images.map((item, index) => (
                <View key={index} style={styles.bannerImageContainer}>
                  <Image 
                  style={[styles.bannerImage, isWideScreen && styles.bannerImageWide]}
                  source={item.source} style={styles.bannerImage} />
                </View>
              ))}
            </View>

          </ScrollView>

        </View>

      </ScrollView>

      {/* Search Input and Button */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => console.log('Search pressed')}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      
      {/* Cards */}
      <View style={[styles.requestTitleContaioner, styles.organizeTitleContainer]}>
        <ThemedText style={[styles.requestTitle]}>
          Your Wedding Needs
        </ThemedText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.cardContainer, isWideScreen && styles.cardContainerWide]}>
          <Card
            imageSource={require('@/assets/home/organize/providers.png')}
            label="Providers"
            labelColor="#FBC442"
            onPress={() => navigation.navigate('CategoryScreen', {
              category: {  // Wrap inside 'category'
                bannerImage: require('@/assets/home/stores/banner.png'),
                profileImage: require('@/assets/home/stores/banner.png'),
                name: "Providers",
                description: "Providers",
                labelColor: "#FBC442",
                products: [  // Ensure this matches 'category.products' in your component
                  { image: require('@/assets/home/stores/product1.png'), name: 'Product 1' },
                  { image: require('@/assets/home/stores/product2.png'), name: 'Product 2' },
                ],
              }
            })}

            buttonStyle={styles.label}
            buttonTextStyle={styles.label}
          />
          <Card
            imageSource={require('@/assets/home/organize/home.png')}
            label="House"
            labelColor="#FAEFA4"
            onPress={() => navigation.navigate('CategoryScreen', {
              category: {  // Wrap inside 'category'
                bannerImage: require('@/assets/home/stores/banner.png'),
                profileImage: require('@/assets/home/stores/banner.png'),
                name: "House",
                description: "House",
                labelColor: "#FAEFA4",
                products: [  // Ensure this matches 'category.products' in your component
                  { image: require('@/assets/home/stores/product1.png'), name: 'Product 1' },
                  { image: require('@/assets/home/stores/product2.png'), name: 'Product 2' },
                ],
              }
            })}

            onPress={() => navigation.navigate('CategoryScreen', { category: 'House' })}

            buttonStyle={styles.label}
            buttonTextStyle={styles.label}
          />
          <Card
            imageSource={require('@/assets/home/organize/wife.png')}
            label="Wife"
            labelColor="#DE3970"
            onPress={() => navigation.navigate('CategoryScreen', {
              category: {  // Wrap inside 'category'
                bannerImage: require('@/assets/home/stores/banner.png'),
                profileImage: require('@/assets/home/stores/banner.png'),
                name: "Wife",

                labelColor: "#DE3970",
                description: "Wife",
                products: [  // Ensure this matches 'category.products' in your component
                  { image: require('@/assets/home/stores/product1.png'), name: 'Product 1' },
                  { image: require('@/assets/home/stores/product2.png'), name: 'Product 2' },
                ],
              }
            })}
            buttonStyle={styles.label}
            buttonTextStyle={styles.label}
          />
          <Card
            imageSource={require('@/assets/home/organize/husband.png')}
            label="Husband"
            labelColor="#19B0A5"
            onPress={() => navigation.navigate('CategoryScreen', {
              category: {  // Wrap inside 'category'
                bannerImage: require('@/assets/home/stores/banner.png'),
                profileImage: require('@/assets/home/stores/banner.png'),
                name: "Husband",
                description: "Husband",
                labelColor: "#19B0A5",
                products: [  // Ensure this matches 'category.products' in your component
                  { image: require('@/assets/home/stores/product1.png'), name: 'Product 1' },
                  { image: require('@/assets/home/stores/product2.png'), name: 'Product 2' },
                ],
              }
            })}
            buttonStyle={styles.label}
            buttonTextStyle={styles.label}
          />
          <Card
            imageSource={require('@/assets/home/organize/reception.png')}
            label="Reception"
            labelColor="#86ba53"
            onPress={() => navigation.navigate('CategoryScreen', {
              category: {  // Wrap inside 'category'
                bannerImage: require('@/assets/home/stores/banner.png'),
                profileImage: require('@/assets/home/stores/banner.png'),
                name: "Reception",
                description: "Reception",
                labelColor: "#86ba53",
                products: [  // Ensure this matches 'category.products' in your component
                  { image: require('@/assets/home/stores/product1.png'), name: 'Product 1' },
                  { image: require('@/assets/home/stores/product2.png'), name: 'Product 2' },
                ],
              }
            })}

            buttonStyle={styles.label}
            buttonTextStyle={styles.label}
          />
        </View>
      </ScrollView>
      {/* Most Visited Stores Section */}
      <View style={styles.section2}>
        <View style={[styles.requestTitleContaioner, styles.organizeTitleContainer]}>
          <ThemedText style={[styles.requestTitle]}>
            Top Providers
          </ThemedText>
        </View>
        <View style={[styles.section2Container, isWideScreen && styles.gridContainerWide]}>
          {visibleStores.map((store, index) => (
            <ShopNowCard
              key={index}
              imageSource={store.imageSource}
              title={store.title}
              description={store.description}
              onPress={() => console.log(`Visit ${store.title}`)}
            />
          ))}
        </View>
        {storesData.length > 4 && (
          <View style={styles.showMoreView}>
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={handleShowMore}
            >
              <Text style={styles.storeCardButtonText}>Show More ..</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Swiper Section */}
      <View style={[styles.requestTitleContaioner, styles.organizeTitleContainer]}>
        <ThemedText style={[styles.requestTitle]}>
          Today's Selection
        </ThemedText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainer1}>
          {images.map((item, index) => (
            <Image key={index} source={item.source} style={styles.image1} />
          ))}
        </View>
      </ScrollView>


      {/* Most Visited Products Section */}

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
        {storesData.length > 4 && (
          <View style={styles.showMoreView}>
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={handleShowMore}
            >
              <Text style={styles.storeCardButtonText}>Show More ..</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Animated.ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainerWide: {
    flexDirection: 'row',      // Ensure children are laid out in a row
    paddingHorizontal: 7,     // Add horizontal padding between cards
    width: screenWidth,
    height: 400,
    justifyContent: 'center',  // Horizontally center children
  },
  // Other styles
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    height: 120,
    marginVertical: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 26,
    //fontWeight: 'bold',
    marginTop: 30,
    padding: 7,
    width: '100%',
    textAlign: 'left',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center', // Center horizontally
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 50,
    padding: 10,
    marginTop: 15,
    marginTop: -32,
    backgroundColor: '#f2f2f2',
  },
  searchInput: {
    flex: 1,
    borderRadius: 50,
    marginRight: 10,
    textAlign: 'center',
    height: '100%',
    borderWidth: 1,
    borderColor: '#86BA53'
  },
  searchButton: {
    backgroundColor: '#86BA53',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    height: 210,
  },
  cardContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    textAlignVertical: 'top',
  },

  scrollViewContentContainer: {
    alignItems: 'center',
    flexGrow: 1,
    height: 200,
    marginVertical: 20,
  },
  cardButton: {
    backgroundColor: '#d47091',
    width: dynamicWidth,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  cardButton2: {
    backgroundColor: '#0074C6',
    width: dynamicWidth,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  cardButton3: {
    backgroundColor: '#394842',
    width: dynamicWidth,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  cardButton4: {
    backgroundColor: '#CA2128',
    width: dynamicWidth,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  cardButton5: {
    backgroundColor: '#667148',
    width: dynamicWidth,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  cardButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    width: screenWidth - 40,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  cardBannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    textAlignVertical: 'top',
  },
  bannerImageContainer: {
    width: screenWidth,
    height:300,
  },
  bannerImage: {
    width:'100%',
    height: 300,
  },
  bannerImageWide: {
    width:'100%',
    height: 300,
  },
  image1: {
    width: screenWidth - 40,
    height: 300,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  requestTitle: {
    fontSize: 20,
    textAlign: 'left'
  },
  section2: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  section2Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

    backgroundColor: "#19b0a50a",
  },
  gridContainerWide: {
    justifyContent: 'center', // Align grid items to the start
    marginLeft: 10, // Adjust based on preference
  },
  showMoreView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: 'rgb(251 196 66)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  storeCardButtonText: {
    color: 'white',
    fontSize: 16,
  },
  organizeTitleContainer: {
    padding: 15,

  },
  label: {
    fontSize: 23,
    backgroundColor: 'red', // background in CSS becomes backgroundColor in React Native
    width: '100%',
    textAlign: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    fontWeight: 'bold',
    color: 'white'

  },
});
