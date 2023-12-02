import {
  View,
  StyleSheet,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { ReactNode } from 'react';

import { colors } from '../../theme/design-system/colors';

export function BoxII({ children }: { children: ReactNode }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.wrapper}>{children}</View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 50,
    backgroundColor: colors.darker,
  },
});
