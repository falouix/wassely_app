import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, TextProps as DefaultTextProps, StyleSheet, ActivityIndicator } from 'react-native';
import { useThemeColor } from '../Themed';  // Ensure correct import path
import * as Font from 'expo-font';  // Import the Font module

export type ButtonProps = DefaultTextProps & {
  lightColor?: string;
  darkColor?: string;
  btnWidth?: string | number;  // Allow both string (e.g., '100%') or number (e.g., 100)
  btnHeigth?: string | number;  // Allow both string (e.g., '100%') or number (e.g., 100)
  textColor?: string ;  // Allow both string (e.g., '100%') or number (e.g., 100)
  
  onPress: () => void;
  isLoading?: boolean;  // Optional loading state
};

export function PrimaryBtn(props: ButtonProps) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts
  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),  // Ensure correct path
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading fonts:', error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const { lightColor, darkColor, btnWidth,btnHeigth,textColor, onPress, isLoading, style, children, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
  // Render loading state or button only after fonts are loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color={color} />;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: lightColor, width: btnWidth, height: btnHeigth }, style]}
      activeOpacity={0.7}
      {...otherProps}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <Text style={[styles.text, { color: textColor, fontFamily: 'SpaceMono-Regular' }]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    backgroundColor: 'transparent', // Correct spelling of 'transparent'
    paddingVertical: 3,
    paddingHorizontal: 10, // Add padding for horizontal spacing
    textAlign: 'center',
    color: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 2,
    borderRadius:25,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
  },
});
