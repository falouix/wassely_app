// components/useColorScheme.ts
import { useColorScheme as useRNColorScheme } from 'react-native';

export function useColorScheme() {
  return useRNColorScheme() || 'light'; // Fallback to 'light' if undefined
}
