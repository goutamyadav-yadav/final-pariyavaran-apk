import { Platform, StatusBar } from 'react-native';

export function getTopInset(extra = 20) {
  const statusBarHeight =
    Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;
  return statusBarHeight + extra;
}

export function getBottomInset(extra = 24) {
  return extra;
}
