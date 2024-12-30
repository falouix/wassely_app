import React, { useState, useEffect } from 'react';
import { Text as DefaultText, TextProps as DefaultTextProps, StyleSheet, ActivityIndicator } from 'react-native';
import { useThemeColor } from './Themed';  // Ensure correct import path
import * as Font from 'expo-font';  // Import the Font module

export type TextProps = DefaultTextProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText(props: TextProps) {
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

  const { lightColor, darkColor, style, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  if (!fontsLoaded) {
    // Show a loading spinner while the font is loading
    return <ActivityIndicator size="small" color={color} />;
  }

  return (
    <DefaultText style={[{ color }, { fontFamily: 'SpaceMono-Regular'  }, style]} {...otherProps} />
  );
}
