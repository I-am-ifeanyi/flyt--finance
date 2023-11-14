import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';

import { Box } from '../../ui/components/layout';
import { colors } from '../../ui/theme/design-system/colors';
import { Button } from '../../ui/components/layout';
import { FirstScreen } from '../../ui/components/onboarding/Components';
import { SecondScreen } from '../../ui/components/onboarding/Components';
import { ThirdScreen } from '../../ui/components/onboarding/Components';
import { FourthScreen } from '../../ui/components/onboarding/Components';
import { FifthScreen } from '../../ui/components/onboarding/Components';

import { navigate } from '../../utils/navigation';

export function Onboarding() {
  const [bars, setBars] = useState({
    bar1: true,
    bar2: false,
    bar3: false,
    bar4: false,
    bar5: false,
  });

  const { bar1, bar2, bar3, bar4, bar5 } = bars;
  const logo = require('../../assets/logo-assets/logo.png');

  const enteringAnimation = new Keyframe({
    0: {
      width: 0,
      backgroundColor: colors.light,
      easing: Easing.quad,
    },
    100: {
      width: Platform.OS === 'ios' ? 70 : 60,
      backgroundColor: colors.light,
      easing: Easing.quad,
    },
  }).duration(4000);

  useEffect(() => {
    setTimeout(() => {
      setBars({
        bar1: true,
        bar2: true,
        bar3: false,
        bar4: false,
        bar5: false,
      });
    }, 4000);
    setTimeout(() => {
      setBars({
        bar1: true,
        bar2: true,
        bar3: true,
        bar4: false,
        bar5: false,
      });
    }, 8000);
    setTimeout(() => {
      setBars({
        bar1: true,
        bar2: true,
        bar3: true,
        bar4: true,
        bar5: false,
      });
    }, 12000);
    setTimeout(() => {
      setBars({
        bar1: true,
        bar2: true,
        bar3: true,
        bar4: true,
        bar5: true,
      });
    }, 16000);
    setTimeout(() => {
      navigate('PinLogin');
    }, 20000);
  }, []);

  return (
    <Box>
      <View style={screenWrapper}>
        <View style={progressBarWrapper}>
          <View style={[progressBar]}>
            {bar1 && (
              <Animated.View
                style={[progressBar]}
                entering={enteringAnimation}
              />
            )}
          </View>
          <View style={progressBar}>
            {bar2 && (
              <Animated.View
                style={[progressBar]}
                entering={enteringAnimation}
              />
            )}
          </View>
          <View style={progressBar}>
            {bar3 && (
              <Animated.View
                style={[progressBar]}
                entering={enteringAnimation}
              />
            )}
          </View>
          <View style={progressBar}>
            {bar4 && (
              <Animated.View
                style={[progressBar]}
                entering={enteringAnimation}
              />
            )}
          </View>
          <View style={progressBar}>
            {bar5 && (
              <Animated.View
                style={[progressBar]}
                entering={enteringAnimation}
              />
            )}
          </View>
        </View>
        <Image source={logo} style={{ width: 30, height: 30 }} />
        {bar1 && !bar2 && <FirstScreen />}
        {bar2 && !bar3 && <SecondScreen />}
        {bar3 && !bar4 && <ThirdScreen />}
        {bar4 && !bar5 && <FourthScreen />}
        {bar5 && <FifthScreen />}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            width: '100%',
            height: 100,

            marginTop: 50,
          }}>
          <Button handleOnPress={() => alert('Hello World')} />
          <TouchableOpacity>
            <Text
              style={{
                color: colors.light,
                fontSize: 17,
                fontWeight: '500',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    gap: 20,
  },
  progressBarWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  progressBar: {
    width: Platform.OS === 'ios' ? 70 : 60,
    height: 5,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 0.4,
  },
});

const { screenWrapper, progressBar, progressBarWrapper } = styles;
