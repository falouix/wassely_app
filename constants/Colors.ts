// src/styles/theme.ts

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

// Define additional colors
const customColors = {
  primary: '#0074C6',
  secondary: '#d47091',
  accent: '#e978eb',
  dark: '#394842',
};

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    ...customColors, // Spread custom colors into light theme
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    ...customColors, // Spread custom colors into dark theme
  },
};
