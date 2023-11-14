import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

import { buttons } from '../../theme/design-system/buttons';
import { colors } from '../../theme/design-system/colors';

type Props = {
  handleOnPress: () => void;
};

export function Button({ handleOnPress }: Props) {
  const { fill } = buttons;
  return (
    <TouchableOpacity style={fill} onPress={handleOnPress}>
      <Text style={{ color: colors.light, fontSize: 17, fontWeight: '500' }}>
        Create Account
      </Text>
    </TouchableOpacity>
  );
}
