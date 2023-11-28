import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Box } from '../layout';
import { colors } from '../../theme/design-system/colors';

const duration = 2000;
const easing = Easing.bounce;

export function Loader() {
  // const { quad } = Easing;
  const sv = useSharedValue(0);

  useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: sv.value + 0.2 }],
    
  }));
  return (
    <Box>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          marginBottom: 200,
        }}>
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              backgroundColor: colors.blue,
              borderRadius: 100,
            },
            animatedStyle,
          ]}
        />
      </View>
    </Box>
  );
}
