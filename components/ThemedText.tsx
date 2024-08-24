// components/ThemedText.tsx
import React from 'react';
import { Text as DefaultText, TextProps as DefaultTextProps } from 'react-native';
import { useThemeColor } from './Themed';  // Ensure correct import path

export type TextProps = DefaultTextProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText(props: TextProps) {
  const { lightColor, darkColor, style, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}
