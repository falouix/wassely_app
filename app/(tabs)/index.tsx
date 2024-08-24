import { useState } from 'react'; // Import useState for managing state

import { useNavigation } from '@react-navigation/native';
import { Animated, Text, Dimensions, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'; // Import required components and APIs
import { ThemedText as ThemedText } from '@/components/ThemedText'; // Adjust this import if ThemedText is defined elsewhere
import Card from '@/components/Card'; // Assuming you have a Card component
import StoreCard from '@/components/stores/StoreCard'; // Assuming you have a StoreCard component
const screenWidth = Dimensions.get('window').width;
const dynamicWidth = screenWidth * 0.8; // 80% of screen width


export default function TabOneScreen() {
  const navigation = useNavigation();
  const isWideScreen = screenWidth > 600;
  const storesData = [
    { id: 1, title: 'Store 1', description: 'Best products', imageSource: require('@/assets/home/stores/store1.png') },
    { id: 2, title: 'Store 2', description: 'Quality items', imageSource: require('@/assets/home/stores/store2.png') },
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
    { source: require('../../assets/home/banners/banner3.png') },
  ];
  const [visibleStores, setVisibleStores] = useState(storesData.slice(0, 4));
  const [scrollY] = useState(new Animated.Value(0));
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
  return (
    <Animated.ScrollView onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      { useNativeDriver: true }
    )}
      scrollEventThrottle={16}>
      {/* Logo */}
      {/* Animated Logo */}
      <Animated.View
        style={[
          styles.logoContainer,
          { opacity: logoOpacity, transform: [{ translateY: logoTranslateY }] }
        ]}
      >
        <Image
          source={require('@/assets/home/logo.png')}
          style={styles.logo}
        />
      </Animated.View>

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
        <ThemedText style={[styles.requestTitle, styles.title]}>
          Start orgenize your wedding
        </ThemedText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.cardContainer, isWideScreen && styles.cardContainerWide]}>
          <Card
            imageSource={require('@/assets/home/organize/wife.png')}
            label="Wife"
            onPress={() => navigation.navigate('CategoryScreen', { category: 'Wife' })}
            buttonStyle={styles.cardButton}
            buttonTextStyle={styles.cardButtonText}
          />
          <Card
            imageSource={require('@/assets/home/organize/husband.png')}
            label="Husband"
            onPress={() => navigation.navigate('CategoryScreen', { category: 'Husband' })}
            buttonStyle={styles.cardButton2}
            buttonTextStyle={styles.cardButtonText}
          />
          <Card
            imageSource={require('@/assets/home/organize/reception.png')}
            label="Reception"
            onPress={() => navigation.navigate('CategoryScreen', { category: 'Reception' })}
            buttonStyle={styles.cardButton3}
            buttonTextStyle={styles.cardButtonText}
          />
          <Card
            imageSource={require('@/assets/home/organize/providers.png')}
            label="Providers"
            onPress={() => navigation.navigate('CategoryScreen', { category: 'Providers' })}
            buttonStyle={styles.cardButton4}
            buttonTextStyle={styles.cardButtonText}
          />
          <Card
            imageSource={require('@/assets/home/organize/home.png')}
            label="House"
            onPress={() => navigation.navigate('CategoryScreen', { category: 'House' })}
            buttonStyle={styles.cardButton5}
            buttonTextStyle={styles.cardButtonText}
          />
        </View>
      </ScrollView>


      {/* Swiper Section */}
      <View style={[styles.requestTitleContaioner, styles.organizeTitleContainer]}>
        <ThemedText style={[styles.requestTitle, styles.title]}>
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

      {/* Most Visited Stores Section */}
      <View style={styles.section2}>
        <View style={[styles.requestTitleContaioner, styles.organizeTitleContainer]}>
          <ThemedText style={[styles.requestTitle, styles.title]}>
            Most Visited Stores
          </ThemedText>
        </View>
        <View style={[styles.section2Container, isWideScreen && styles.gridContainerWide]}>
          {visibleStores.map((store, index) => (
            <StoreCard
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
      {/* Most Visited Stores Section */}
      <View style={styles.section2}>
        <View style={[styles.requestTitleContaioner, styles.organizeTitleContainer]}>
          <ThemedText style={[styles.requestTitle, styles.title]}>
            Most Visited Stores
          </ThemedText>
        </View>
        <View style={[styles.section2Container, isWideScreen && styles.gridContainerWide]}>
          {visibleStores.map((store, index) => (
            <StoreCard
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
    width: '100%',
    justifyContent: 'center', // Center content horizontally on wide screens
    alignItems: 'center', // Center items within the container
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
    fontWeight: 'bold',
    marginTop: 5,
    padding: 7
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
    width: '95%',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    borderRadius: 50,
    marginRight: 10,
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: '#0074C6',
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
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 190,

  },
  cardContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 300,
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
  image1: {
    width: screenWidth - 40,
    height: 300,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  requestTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  section2: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  section2Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridContainerWide: {
    justifyContent: 'flex-start', // Align grid items to the start
    marginLeft: 10, // Adjust based on preference
  },
  showMoreView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: '#d47091',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  storeCardButtonText: {
    color: 'white',
    fontSize: 16,
  },
  organizeTitleContainer: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
