import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleProp, TextStyle } from 'react-native';

export type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};

export default function AppIcon({
  name,
  size = 20,
  color = '#0a3617',
  style,
}: Props) {
  return (
    <MaterialCommunityIcons name={name} size={size} color={color} style={style} />
  );
}
