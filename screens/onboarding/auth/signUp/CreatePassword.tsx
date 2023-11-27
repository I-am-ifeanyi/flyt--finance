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

import { ToggleButton } from '../../../../ui/components/general';
import { Box } from '../../../../ui/components/layout';
import { navigate } from '../../../../utils/navigation';
import TextInput from '../../../../ui/form/TextInput';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';
import { PASSWORD_PATTERN } from '../../../../services/formControls';

import LeftIcon from '../../../../assets/icons/leftIcon.svg';

export function CreatePassword({ navigation }: any) {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm();
  const { updateUseFaceID, updatePassword, useFaceID } = userData();
  const [userPassword, setUserPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword(prev => !prev);
  };

  const onSubmit = (data: any) => {
    updatePassword(userPassword);
    navigate('LoginNavigationStack', {
      screen: 'MainLoginRoute',
      params: {
        screen: 'VerifyNewPassword',
        params: {
          stack: 'signUp',
        },
      },
    });
  };

  return (
    <Box>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LeftIcon />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, marginTop: 50 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={textStyle}>Create a password</Text>
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
        <View style={{ marginTop: 'auto', gap: 30 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{ fontSize: 17, fontWeight: '500', color: colors.light }}>
              Use face ID to login
            </Text>
            <TouchableOpacity onPress={() => updateUseFaceID(!useFaceID)}>
              <ToggleButton
                toggleFunction={() => updateUseFaceID(!useFaceID)}
              />
            </TouchableOpacity>
          </View>
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
        </View>
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
});

const {
  textStyle,
  inputWrapperStyle,
  inputStyle,
  buttonContainer,
  buttonTitleStyle,
} = styles;
