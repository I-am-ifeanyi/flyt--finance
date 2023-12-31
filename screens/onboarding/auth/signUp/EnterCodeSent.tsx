import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '../../../../ui/components/layout';
import { Button } from '../../../../ui/components/layout';
import { navigate } from '../../../../utils/navigation';
import { Timer } from '../../../../utils/Timer';
import { userData } from '../state/userDataState';
import TextInput from '../../../../ui/form/TextInput';
import { colors } from '../../../../ui/theme/design-system/colors';

import LeftIcon from '../../../../assets/icons/leftIcon.svg';

export function EnterCodeSent({ navigation }: any) {
  const [initialCount, setInitialCount] = useState(20);
  const [isTimeCounting, setIsTimeCounting] = useState(true);
  const [secondsRemaining, setSecondsRemaining] = useState(initialCount);
  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm();
  const { updateOTP, userNumber } = userData();
  const [OTP, setOTP] = useState<any>(null);
  const redactedNumber = userNumber.slice(7);
  const isOTPComplete = OTP?.length > 5;

  const inputStyle = {
    color: colors.light,
    fontSize: 20,
  };

  const onSubmit = () => {
    updateOTP(OTP);
    navigate("CreatePassword")
  };

  useEffect(() => {
    if (secondsRemaining) {
      setIsTimeCounting(true);
    }
  }, [secondsRemaining]);


  return (
    <Box>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginBottom: 40 }}>
        <LeftIcon />
      </TouchableOpacity>

      <View>
        <Text style={textStyle}>
          Enter the code we sent to your number **** {redactedNumber}
        </Text>
        <Text style={{ color: colors.grey, marginTop: 20 }}>
          Enter the code below
        </Text>
        <View style={numberContainer}>
          <TextInput
            textInputField={'phoneNumber'}
            selectTextOnFocus={true}
            editable={true}
            handleChange={data => setOTP(data)}
            control={control}
            isPassword={false}
            inputStyle={inputStyle}
            placeholder="000-000"
            keyboardType="numeric"
            errorMessage={errors?.phoneNumber?.message}
            maxLength={6}
            value={OTP}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        style={{
          marginTop: 'auto',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableOpacity
          disabled={isTimeCounting}
          style={buttonContainer}
          onPress={() => {
            setSecondsRemaining(10);
            setOTP(null);
            Keyboard.dismiss();
          }}>
          <Text
            style={{
              color: isTimeCounting ? colors.grey : colors.light,
              textAlign: 'center',
            }}>
            {isTimeCounting ? 'Resend in' : 'Resend Code'}
          </Text>
          {isTimeCounting && (
            <Timer
              initialCount={initialCount}
              isTimeCounting={isTimeCounting}
              secondsRemaining={secondsRemaining}
              setIsTimeCounting={setIsTimeCounting}
              setSecondsRemaining={setSecondsRemaining}
              timerStyle={{
                color: colors.grey,
                position: 'relative',
                fontWeight: '500',
                marginHorizontal: 5,
              }}
            />
          )}
        </TouchableOpacity>
        <Button
          handleOnPress={handleSubmit(onSubmit)}
          title="Continue"
          containerStyle={isOTPComplete ? buttonContainer2 : buttonContainer}
          titleStyle={isOTPComplete ? buttonTitleStyle2 : buttonTitleStyle}
          disabled={isOTPComplete ? false : true}
        />
      </KeyboardAvoidingView>
    </Box>
  );
}



const styles = StyleSheet.create({
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '30%',
    borderBottomWidth: 0.2,
    borderColor: colors.grey,
    gap: 16,
    marginVertical: 20,
  },
  buttonContainer: {
    width: '45%',
    height: 45,
    backgroundColor: colors.darkGrey,

    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  buttonTitleStyle: {
    color: colors.light,
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer2: {
    width: '45%',
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  buttonTitleStyle2: {
    color: colors.light,
    fontSize: 17,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.light,
  },
  inputWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 60,
    borderBottomWidth: 0.2,
    borderColor: colors.darkGrey,
  },
  inputStyle: {
    fontSize: 16,
    color: colors.light,
    width: '90%',
  },
});

const {
  numberContainer,
  buttonContainer2,
  buttonTitleStyle2,
  buttonContainer,
  buttonTitleStyle,
  textStyle,
} = styles;
