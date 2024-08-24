// webStyles.js
import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const isSmallScreen = screenWidth <= 420;

const webStyles = StyleSheet.create({
  scrollView: {
    width: isSmallScreen ? screenWidth : 'auto', // Apply specific width for small screens
    display: 'flex',
    overflowX:isSmallScreen ? 'scroll' : 'auto', // Apply specific width for small screens 'scroll',
    // You can add more web-specific styles here
  },
});

export default webStyles;
