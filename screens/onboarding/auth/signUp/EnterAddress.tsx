import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { userData } from '../state/userDataState';

import { Box } from '../../../../ui/components/layout';
import { styles } from '../../../../ui/theme/design-system/styles';
import { navigate } from '../../../../utils/navigation';
import TextInput from '../../../../ui/form/TextInput';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';

import LeftIcon from '../../../../assets/icons/leftIcon.svg';

export function EnterAddress({ navigation }: any) {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm();
  const {
    textStyle,
    inputWrapperStyle,
    inputStyle,
    buttonContainer,
    buttonTitleStyle,
  } = styles;
  const { updateUserAddress, userAddress } = userData();

  const onSubmit = (data: any) => {};

  console.log(userAddress);

  return (
    <Box>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LeftIcon />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, marginTop: 50 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={textStyle}>Enter your primary address</Text>
        </View>
        <TextInput
          textInputField={'userAddress'}
          placeholder={'Enter your address'}
          keyboardType={'default'}
          selectTextOnFocus={true}
          placeholderTextColor={'#777776'}
          editable={true}
          onSubmitEditing={data => updateUserAddress(data.userAddress)}
          handleChange={data => updateUserAddress(data)}
          control={control}
          inputWrapperStyle={inputWrapperStyle}
          inputStyle={inputStyle}
          errorMessage={errors?.userPassword?.message}
          isDisplayPasswordIcon={true}
          rules={{
            required: 'Please enter address',
          }}
        />
        <View style={{ marginTop: 'auto', gap: 30 }}>
          <Button
            handleOnPress={handleSubmit(onSubmit)}
            title="Continue"
            // @ts-expect-error
            containerStyle={[
              {
                backgroundColor: userAddress ? colors.blue : colors.darkGrey,
              },
              buttonContainer,
            ]}
            titleStyle={buttonTitleStyle}
            disabled={!userAddress ? true : false}
          />
        </View>
      </KeyboardAvoidingView>
    </Box>
  );
}


