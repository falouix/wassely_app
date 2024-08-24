// components/ThemedView.tsx
import React from 'react';
import { View as DefaultView, ViewProps as DefaultViewProps } from 'react-native';
import { useThemeColor } from './useThemeColor';  // Adjust the path as needed

export type ViewProps = DefaultViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView(props: ViewProps) {
  const { lightColor, darkColor, style, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
