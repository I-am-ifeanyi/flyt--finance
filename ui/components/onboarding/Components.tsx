import { View, Text, StyleSheet, Platform } from 'react-native';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';

import { colors } from '../../theme/design-system/colors';
import FirstScreenImage from '../../../assets/onboarding-assets/first-screen.svg';
import SecondScreenImage from '../../../assets/onboarding-assets/second-screen.svg';
import ThirdScreenImage from '../../../assets/onboarding-assets/third-screen.svg';
import FourthScreenImage from '../../../assets/onboarding-assets/fourth-screen.svg';
import FifthScreenImage from '../../../assets/onboarding-assets/fifth-screen.svg';

const enteringImageAnimation = new Keyframe({
  0: {
    transform: [{ scale: 0 }],

    easing: Easing.quad,
  },
  50: {
    transform: [{ scale: 1.2 }],
  },
  100: {
    transform: [{ scale: 1 }],

    easing: Easing.quad,
  },
}).duration(3000);

const enteringTextAnimation = new Keyframe({
  0: {
    transform: [{ scale: 1 }],

    easing: Easing.quad,
  },
  50: {
    transform: [{ scale: 0.5 }],
  },
  100: {
    transform: [{ scale: 1 }],

    easing: Easing.quad,
  },
}).duration(3000);

export const FirstScreen = () => {
  return (
    <View style={subWrapper}>
      <Animated.View entering={enteringImageAnimation}>
        <FirstScreenImage />
      </Animated.View>
      <Animated.View entering={enteringTextAnimation}>
        <View style={{ gap: 10 }}>
          <Text style={screenMainText}>
            Make cross-border payments at zero fees.
          </Text>
          <Text style={screenSmallText}>
            Send money to friends, family and business partners with no costs
            attached.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export const SecondScreen = () => {
  return (
    <View style={subWrapper}>
      <Animated.View entering={enteringImageAnimation}>
        <SecondScreenImage />
      </Animated.View>
      <Animated.View entering={enteringTextAnimation}>
        <View style={{ gap: 10 }}>
          <Text style={screenMainText}>
            Handle tuition payment and accommodation easily.
          </Text>
          <Text style={screenSmallText}>
            Handle payments for your tuition abroad. Yeah, while on your couch.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export const ThirdScreen = () => {
  return (
    <View style={subWrapper}>
      <Animated.View entering={enteringImageAnimation}>
        <ThirdScreenImage />
      </Animated.View>
      <Animated.View entering={enteringTextAnimation}>
        <View style={{ gap: 10 }}>
          <Text style={screenMainText}>
            Shop easily in stores & merchant sites worldwide.
          </Text>
          <Text style={screenSmallText}>
            Pick the store, we have you covered with making payments online.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export const FourthScreen = () => {
  return (
    <View style={subWrapper}>
      <Animated.View entering={enteringImageAnimation}>
        <FourthScreenImage />
      </Animated.View>
      <Animated.View entering={enteringTextAnimation}>
        <View style={{ gap: 10 }}>
          <Text style={screenMainText}>
            Handle cost of migration with minimum effort.
          </Text>
          <Text style={screenSmallText}>
            Moving abroad? We make it easy to manage those costs.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export const FifthScreen = () => {
  return (
    <View style={subWrapper}>
      <Animated.View entering={enteringImageAnimation}>
        <FifthScreenImage />
      </Animated.View>
      <Animated.View entering={enteringTextAnimation}>
        <View style={{ gap: 10 }}>
          <Text style={screenMainText}>
            Bank-grade security for all your transactions.
          </Text>
          <Text style={screenSmallText}>
            Your transactions are secured with 256-bit AES bank-level
            encryption.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  subWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: Platform.OS === "ios" ? 500 : 420,
 
    gap: 10
  },
  screenMainText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.light,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  screenSmallText: {
    color: colors.grey,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

const { subWrapper, screenMainText, screenSmallText } = styles;
