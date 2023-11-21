import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { userData } from '../state/userDataState';

import { Box } from '../../../../ui/components/layout';
import { Button } from '../../../../ui/components/layout';
import { navigate } from '../../../../utils/navigation';
import TextInput from '../../../../ui/form/TextInput';
import { countriesData } from '../../../../services/JSON/countriesData';
import { colors } from '../../../../ui/theme/design-system/colors';
import { PHONE_PATTERN } from '../../../../services/formControls';

import CloseIcon from '../../../../assets/icons/closeIcon.svg';
import DownIcon from '../../../../assets/icons/downIcon.svg';

export function PhoneNumber() {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors },
  } = useForm();
  const { countryFlag, userNumber, updateUserNumber } = userData();

  const inputStyle = {
    color: colors.light,
    fontSize: 20,
  };

  const onSubmit = (data: any) => {
    console.log(data);
    navigate('CountrySelect');
  };

  let numberCount;

  if (userNumber) {
    numberCount = userNumber.length;
  }

  return (
    <Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ paddingHorizontal: 20, flex: 1 }}>
        <Pressable
          onPress={() => Keyboard.dismiss()}
          style={{ width: 50, height: 50, marginLeft: 'auto' }}>
          <CloseIcon style={{ marginLeft: 'auto' }} />
        </Pressable>
        <View>
          <Text style={textStyle}>Enter your registered</Text>
          <Text style={textStyle}>phone number</Text>
        </View>
        <View style={numberContainer}>
          <Pressable
            onPress={() => navigate('CountrySelect')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 28 }}>{countryFlag}</Text>
            <DownIcon />
          </Pressable>
          <TextInput
            textInputField={'phoneNumber'}
            selectTextOnFocus={true}
            editable={true}
            handleChange={data => updateUserNumber(data)}
            control={control}
            inputStyle={inputStyle}
            placeholder="Enter phone number"
            keyboardType="numeric"
            errorMessage={errors?.phoneNumber?.message}
            rules={{
              required: 'Phone number is required',
              maxLength: { value: 11, message: 'Maximum of 11 digits' },
              minLength: { value: 10, message: 'Minimum length is 10' },
              pattern: {
                value: PHONE_PATTERN,
                message: 'Not a valid phone number',
              },
            }}
            value={userNumber}
          />
        </View>
        <Button
          handleOnPress={handleSubmit(onSubmit)}
          title="Continue"
          containerStyle={
            numberCount && numberCount > 9 ? buttonContainer2 : buttonContainer
          }
          titleStyle={
            numberCount && numberCount > 9
              ? buttonTitleStyle2
              : buttonTitleStyle
          }
          disabled={numberCount && numberCount > 9 ? false : true}
        />
      </KeyboardAvoidingView>
    </Box>
  );
}

const styles = StyleSheet.create({
  textStyle: { fontSize: 24, fontWeight: '500', color: colors.light },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: colors.grey,
    gap: 16,
    marginVertical: 20,
  },

  buttonContainer: {
    width: '100%',
    height: 45,
    backgroundColor: colors.darkGrey,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 60,
  },
  buttonContainer2: {
    width: '100%',
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 60,
  },
  buttonTitleStyle: {
    color: colors.grey,
    fontSize: 17,
  },
  buttonTitleStyle2: {
    color: colors.light,
    fontSize: 17,
  },
});

const {
  textStyle,
  numberContainer,
  buttonContainer,
  buttonContainer2,
  buttonTitleStyle,
  buttonTitleStyle2,
} = styles;
