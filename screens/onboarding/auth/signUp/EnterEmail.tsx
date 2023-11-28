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
import { EMAIL_PATTERN } from '../../../../services/formControls';
import { navigate } from '../../../../utils/navigation';
import TextInput from '../../../../ui/form/TextInput';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';

import LeftIcon from '../../../../assets/icons/leftIcon.svg';

export function EnterEmail({ navigation }: any) {
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
  const { userEmail, updateUserEmail, updateIsNewUser } = userData();
  const [initialEmail, setInitialEmail] = useState('');
  const [isEmailExisting, setIsEmailExisting] = useState(false);

  const onSubmit = (data: any) => {
    const finalUserEmail = initialEmail?.toLocaleLowerCase();
    if (finalUserEmail === userEmail) {
      setIsEmailExisting(true);
      return;
    } else {
      updateUserEmail(finalUserEmail);
      navigate('EmailConfirmation');
      updateIsNewUser(true);
      setInitialEmail('');
    }
  };
  console.log(userEmail);

  return (
    <Box>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LeftIcon />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, marginTop: 50 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={textStyle}>Enter your email address</Text>
          <View style={{ paddingRight: 100 }}>
            <Text style={{ color: colors.grey, marginTop: 20 }}>
              We will use this for account recovery and important updates
            </Text>
          </View>
        </View>

        <TextInput
          value={initialEmail}
          textInputField={'userEmail'}
          placeholder={'Enter email address'}
          keyboardType={'email-address'}
          selectTextOnFocus={true}
          placeholderTextColor={'#777776'}
          editable={true}
          onSubmitEditing={data => setInitialEmail(data.userAddress)}
          handleChange={data => {
            setInitialEmail(data);
            setIsEmailExisting(false);
          }}
          control={control}
          inputWrapperStyle={inputWrapperStyle}
          inputStyle={inputStyle}
          errorMessage={errors?.userEmail?.message}
          isDisplayPasswordIcon={true}
          rules={{
            required: 'Please enter email',
            pattern: {
              value: EMAIL_PATTERN,
              message: 'Please enter a valid email',
            },
          }}
        />
        {isEmailExisting && (
          <Text style={{ marginTop: 10, color: colors.reddish, fontSize: 12 }}>
            Sorry, this email already exists.{' '}
            <Text
              style={{ color: colors.light, fontWeight: '600', fontSize: 14 }}
              onPress={() => {
                navigate('LoginNavigationStack', {
                  screen: 'MainLoginRoute',
                  params: {
                    screen: 'PasswordLandingScreen',
                  },
                });
              }}>
              Forgot Password?
            </Text>
          </Text>
        )}

        <View style={{ marginTop: 'auto', gap: 30 }}>
          <Button
            handleOnPress={handleSubmit(onSubmit)}
            title="Continue"
            // @ts-expect-error
            containerStyle={[
              {
                backgroundColor: initialEmail ? colors.blue : colors.darkGrey,
              },
              buttonContainer,
            ]}
            titleStyle={buttonTitleStyle}
            disabled={!initialEmail ? true : false}
          />
        </View>
      </KeyboardAvoidingView>
    </Box>
  );
}
