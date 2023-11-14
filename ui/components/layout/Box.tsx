import { View, StyleSheet, Platform } from 'react-native';
import React, { ReactNode } from 'react';

import { colors } from '../../theme/design-system/colors';

export function Box({ children }: { children: ReactNode }) {
  return <View style={style.wrapper}>{children}</View>;
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 40,
    paddingHorizontal: 10,
    backgroundColor: colors.dark,
  },
});
