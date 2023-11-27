import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { colors } from '../../theme/design-system/colors';
import { userData } from '../../../screens/onboarding/auth/state/userDataState';

type Props = {
  toggleFunction: () => void;
};

export function ToggleButton({ toggleFunction }: Props) {
  const { useFaceID } = userData();

  const margin = useSharedValue(useFaceID ? 0 : 1);

  const handlePress = () => {
    margin.value = margin.value === 0 ? 1 : 0;
    toggleFunction();
  };

  const animatedStyles = useAnimatedStyle(() => ({
    marginLeft: withSpring(margin.value ? 0 : 25, { duration: 1500 }),
  }));

  return (
    <Pressable onPress={handlePress}>
      <View
        style={{
          width: 55,
          height: 30,
          backgroundColor: useFaceID ? colors.blue : colors.darkGrey,
          borderRadius: 30,
        }}>
        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              backgroundColor: colors.light,
              borderRadius: 100,
            },
            animatedStyles,
          ]}></Animated.View>
      </View>
    </Pressable>
  );
}
