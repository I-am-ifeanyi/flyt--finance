import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { userData } from '../state/userDataState';

import { Box } from '../../../../ui/components/layout';
import { navigate } from '../../../../utils/navigation';
import TextInput from '../../../../ui/form/TextInput';
import { PasswordLoginModal } from '../../../../ui/components/auth/PasswordLoginModal';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';
import { PASSWORD_PATTERN } from '../../../../services/formControls';

import LeftIcon from '../../../../assets/icons/leftIcon.svg';
import QuestionIcon from '../../../../assets/icons/questionIcon.svg';

export function Password() {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm();
  const { userNumber, password, updateIsNewUser } = userData();
  const [modalVisible, setModalVisible] = useState(false);
  const [userPassword, setUserPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const redactedNumber = userNumber.slice(7);

  const togglePasswordVisibility = () => {
    setIsShowPassword(prev => !prev);
  };

  const onSubmit = (data: any) => {
    if (userPassword === password) {
      updateIsNewUser(false);
      navigate('PinLogin');
    } else alert("Password Incorrect")
  };

  return (
    <Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 40,
          }}>
          <Pressable
            style={{ width: 100 }}
            onPress={() => navigate('PhoneNumber')}>
            <LeftIcon />
          </Pressable>
          <Pressable onPress={() => setModalVisible(true)}>
            <QuestionIcon />
          </Pressable>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={textStyle}>Enter your account</Text>
          <Text style={textStyle}>password for **** {redactedNumber} </Text>
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
          title="Login"
          containerStyle={buttonContainer}
          titleStyle={buttonTitleStyle}
          disabled={isSubmitting ? true : false}
        />
      </KeyboardAvoidingView>
      <PasswordLoginModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(!modalVisible)}
      />
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
    backgroundColor: colors.blue,
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
