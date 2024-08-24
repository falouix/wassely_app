// components/useThemeColor.ts
import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors'; // Adjust the path if needed

type ColorName = 'text' | 'background';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: ColorName
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
