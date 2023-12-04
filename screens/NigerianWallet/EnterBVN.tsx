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

import { BoxII } from '../../ui/components/layout';
import { KnowYourCustomerData } from './state/KnowYourCustomerData';
import { colors } from '../../ui/theme/design-system/colors';
import TextInput from '../../ui/form/TextInput';
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { Button } from '../../ui/components/layout';

import LeftIcon from '../../assets/icons/leftIcon.svg';
import KeyIcon from '../../assets/NigerianWalletsAssets/keyIcon.svg';

export function EnterBVN({ navigation }: any) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { inputWrapperStyle, inputStyle, buttonContainer, buttonTitleStyle } =
    customStyles;
  const { updateUserBVN, userBVN } = KnowYourCustomerData();
  const [enteredDigits, setEnteredDigits] = useState(undefined);

  //@ts-expect-error
  const isDigits12 = enteredDigits?.length === 12;

  const onSubmit = (data: any) => {
    updateUserBVN(data?.BVN);
    navigation.navigate('VerifyWithID');
  };
  return (
    <BoxII>
      <View style={mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftIcon />
        </TouchableOpacity>
        <Text style={mainCaption}>
          Enter your Bank Verification {'\n'}Number (BVN)
        </Text>
        <Text style={subCaption}>
          We are legally required to collect this{'\n'}information to confirm
          your ID
        </Text>
        <View style={[subContainer, inputWrapperStyle]}>
          <KeyIcon />
          <TextInput
            textInputField={'BVN'}
            placeholder={'Enter BVN'}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
            placeholderTextColor={'#777776'}
            editable={true}
            isSearchIcon={false}
            isPassword={false}
            handleChange={data => setEnteredDigits(data)}
            control={control}
            // @ts-expect-error
            inputWrapperStyle={[
              inputWrapperStyle,
              {
                borderBottomWidth: 0,
                marginTop: errors?.BVN ? 25 : 0,
              },
            ]}
            inputStyle={inputStyle}
            errorMessage={errors?.BVN?.message}
            rules={{
              required: 'Please enter your BVN',
              maxLength: { value: 12, message: 'Maximum of 12 digits' },
              minLength: { value: 12, message: 'Minimum length is 12' },
            }}
          />
        </View>
        <KeyboardAvoidingView
          style={{ marginTop: 'auto' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Button
            title="Continue"
            handleOnPress={handleSubmit(onSubmit)}
            //@ts-expect-error
            containerStyle={[
              buttonContainer,
              {
                backgroundColor: isDigits12 ? colors.blue : colors.darkGrey,
                marginBottom: 80,
              },
            ]}
            titleStyle={buttonTitleStyle}
          />
        </KeyboardAvoidingView>
      </View>
    </BoxII>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 30,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  mainCaption: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.light,
  },
  subCaption: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.grey,
  },
});

const { mainContainer, subContainer, mainCaption, subCaption } = styles;
