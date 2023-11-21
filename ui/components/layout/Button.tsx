import { Text, TouchableOpacity, TextStyle } from 'react-native';
import React from 'react';

type Props = {
  handleOnPress: (data: any) => void;
  containerStyle?: TextStyle;
  titleStyle?: TextStyle;
  title?: string;
  disabled?: boolean;
};

export function Button({
  handleOnPress,
  containerStyle,
  title,
  titleStyle,
  disabled,
}: Props) {
  return (
    <TouchableOpacity
      style={containerStyle}
      disabled={disabled}
      onPress={handleOnPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
