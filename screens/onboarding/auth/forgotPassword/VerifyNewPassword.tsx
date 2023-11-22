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
import { useToast } from '../../../../hooks/useToast';

import { Box } from '../../../../ui/components/layout';
import { navigate } from '../../../../utils/navigation';
import TextInput from '../../../../ui/form/TextInput';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';
import { PASSWORD_PATTERN } from '../../../../services/formControls';

import LeftIcon from '../../../../assets/icons/leftIcon.svg';

export function VerifyNewPassword() {
  const { success, error } = useToast();
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm();
  const { userNumber, updatePassword, password } = userData();
  const [userPassword, setUserPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword(prev => !prev);
  };

  const onSubmit = (data: any) => {
    const newPassword = data?.userPassword;
    if (newPassword === password) {
      success({
        title: 'Success',
        message: 'Your password reset is successful!',
      });
    } else
      error({
        title: 'Error',
        message: 'Password not a match, please try again',
      });

    // navigate('PinLogin');
  };

  console.log(password);

  return (
    <Box>
      <TouchableOpacity onPress={() => navigate('CreateNewPassword')}>
        <LeftIcon />
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, marginTop: 50 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={textStyle}>Verify new password</Text>
          <Text style={{ fontSize: 16, color: colors.grey, marginTop: 5 }}>
            Enter your new password again
          </Text>
        </View>
        <TextInput
          value={userPassword}
          textInputField={'userPassword'}
          placeholder={'Enter Password'}
          keyboardType={'default'}
          selectTextOnFocus={true}
          placeholderTextColor={'#777776'}
          editable={true}
          isSearchIcon={false}
          isPassword={true}
          togglePasswordVisibility={togglePasswordVisibility}
          isHidePassword={isShowPassword}
          handleChange={data => {
            setUserPassword(data);
          }}
          control={control}
          inputWrapperStyle={inputWrapperStyle}
          inputStyle={inputStyle}
          errorMessage={errors?.userPassword?.message}
          isDisplayPasswordIcon={true}
          rules={{
            required: 'Please enter password',
            maxLength: { value: 15, message: 'Maximum of 15 digits' },
            minLength: { value: 8, message: 'Minimum length is 8' },
            pattern: {
              value: PASSWORD_PATTERN,
              message:
                'Password must include an uppercase, lowercase, number and a special character',
            },
          }}
        />
        <Button
          handleOnPress={handleSubmit(onSubmit)}
          title="Continue"
          // @ts-expect-error
          containerStyle={[
            {
              backgroundColor:
                userPassword.length > 9 ? colors.blue : colors.darkGrey,
            },
            buttonContainer,
          ]}
          titleStyle={buttonTitleStyle}
          disabled={!userPassword ? true : false}
        />
      </KeyboardAvoidingView>
    </Box>
  );
}

const styles = StyleSheet.create({
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
  buttonContainer: {
    width: '100%',
    height: 45,
    // backgroundColor: colors.blue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 60,
  },
  buttonTitleStyle: {
    color: colors.light,
    fontSize: 18,
    fontWeight: '600',
  },
});

const {
  textStyle,
  inputWrapperStyle,
  inputStyle,
  buttonContainer,
  buttonTitleStyle,
} = styles;
