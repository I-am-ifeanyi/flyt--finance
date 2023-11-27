import { View, Text, StyleSheet, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Box } from '../../../../ui/components/layout';
import { Timer } from '../../../../utils/Timer';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';
import { useToast } from '../../../../hooks/useToast';
import { navigate } from '../../../../utils/navigation';

import AtIcon from '../../../../assets/icons/atIcon.svg';

export function PinLandingScreen() {
  const { info } = useToast();

  const [initialCount, setInitialCount] = useState(20);
  const [isTimeCounting, setIsTimeCounting] = useState(true);
  const [secondsRemaining, setSecondsRemaining] = useState(initialCount);

  const onPressFunction = () => {
    if (isTimeCounting) {
      //   Linking.openURL('mailto:theonyekagroup@gmail.com');
      navigate('CreateNewPin');
    }
    setSecondsRemaining(initialCount);
    info({
      title: 'Info',
      message: 'Email has been sent again, please check your email',
    });
  };

  return (
    <Box>
      <View style={container}>
        <AtIcon />
        <Text
          style={{
            marginTop: 20,
            color: colors.light,
            fontSize: 21,
            fontWeight: '500',
          }}>
          We sent you an email
        </Text>
        <Text style={{ color: colors.grey, fontSize: 16, textAlign: 'center' }}>
          A mail with a PIN reset link has been sent to your registered email
          address.
        </Text>
        <Text style={{ color: colors.grey, fontSize: 16 }}>
          Click in the link to reset.
        </Text>
      </View>
      <View style={{ marginBottom: 60, alignItems: 'center' }}>
        <Button
          handleOnPress={onPressFunction}
          title={isTimeCounting ? 'Open email app' : 'Resend link'}
          containerStyle={buttonContainer}
          titleStyle={buttonTitleStyle}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            gap: 5,
            marginTop: 20,
          }}>
          <Text style={{ color: colors.grey, position: 'absolute', left: 75 }}>
            Resend another code in
          </Text>

          <Timer
            initialCount={initialCount}
            isTimeCounting={isTimeCounting}
            setIsTimeCounting={setIsTimeCounting}
            secondsRemaining={secondsRemaining}
            setSecondsRemaining={setSecondsRemaining}
            timerStyle={{
              color: colors.light,
              position: 'absolute',
              right: 75,
              fontWeight: '500',
            }}
          />
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    height: 45,
    backgroundColor: colors.darkGrey,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 10,
  },
  buttonTitleStyle: {
    color: colors.light,
    fontSize: 18,
    fontWeight: '600',
  },
});

const { container, buttonContainer, buttonTitleStyle } = styles;
