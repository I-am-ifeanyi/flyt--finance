import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

import { userData } from '../state/userDataState';

import { Box } from '../../../../ui/components/layout';
import { navigate } from '../../../../utils/navigation';
import TextInput from '../../../../ui/form/TextInput';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';

import LeftIcon from '../../../../assets/icons/leftIcon.svg';

type legalInfoProps = {
  firstName: string;
  lastName: string;
  date_of_birth: Date | null;
};
export function LegalInfo({ navigation }: any) {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm();
  const {
    updateLegalInformation,
    legalInfo,
    updateDateOfBirth,
    date_of_birth,
  } = userData();

  const [openDate, setOpenDate] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userDateOfBirth, setUserDateOfBirth] = useState<string | undefined>(
    '',
  );

  const onSubmit = (data: any) => {
    updateLegalInformation(data);
    navigate('LoginNavigationStack', {
      screen: 'MainLoginRoute',
      params: {
        screen: 'CountrySelect',
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
          <Text style={textStyle}>Enter your legal information</Text>
          <View style={{ paddingRight: 100 }}>
            <Text style={{ color: colors.grey, marginTop: 20 }}>
              Enter your details as it is displayed on your legal documents
            </Text>
          </View>
        </View>
        <TextInput
          textInputField={'firstName'}
          placeholder={'First Name'}
          keyboardType={'default'}
          onSubmitEditing={data => console.log(data)}
          selectTextOnFocus={true}
          placeholderTextColor={'#777776'}
          editable={true}
          isSearchIcon={false}
          isPassword={false}
          handleChange={data => {
            setUserFirstName(data);
            updateLegalInformation(data);
          }}
          control={control}
          inputWrapperStyle={inputWrapperStyle}
          inputStyle={inputStyle}
          errorMessage={errors?.firstName?.message}
          isDisplayPasswordIcon={false}
          rules={{
            required: 'Please enter your first name',
            maxLength: { value: 20, message: 'Maximum of 15 digits' },
            minLength: { value: 4, message: 'Minimum length is 8' },
          }}
        />
        <TextInput
          textInputField={'lastName'}
          placeholder={'First Name'}
          keyboardType={'default'}
          onSubmitEditing={data => console.log(data)}
          selectTextOnFocus={true}
          placeholderTextColor={'#777776'}
          editable={true}
          isSearchIcon={false}
          isPassword={false}
          handleChange={data => {
            setUserLastName(data);
            updateLegalInformation(data);
          }}
          control={control}
          inputWrapperStyle={inputWrapperStyle}
          inputStyle={inputStyle}
          errorMessage={errors?.lastName?.message}
          isDisplayPasswordIcon={false}
          rules={{
            required: 'Please enter your last name',
            maxLength: { value: 20, message: 'Maximum of 15 digits' },
            minLength: { value: 4, message: 'Minimum length is 8' },
          }}
        />

        <Pressable
          style={[{ padding: 0, alignItems: 'flex-start' }, inputWrapperStyle]}
          onPress={() => setOpenDate(true)}>
          {!openDate && (
            <Text style={{ color: '#777776', fontSize: 16 }}>
              Date of birth
            </Text>
          )}
          <DateTimePicker
            value={new Date()}
            mode="date"
            onChange={(event, selected) => {
              setUserDateOfBirth(selected?.toDateString());
              updateDateOfBirth(selected?.toDateString());
            }}
            textColor={colors.blue}
            themeVariant="dark"
            // @ts-expect-error
            style={{
              display: openDate ? 'block' : 'none',
              backgroundColor: colors.dark,
              width: '28%',
            }}
          />
        </Pressable>

        <View style={{ marginTop: 'auto', gap: 30 }}>
          <Button
            handleOnPress={handleSubmit(onSubmit)}
            title="Continue"
            // @ts-expect-error
            containerStyle={[
              {
                backgroundColor:
                  userFirstName && userLastName && userDateOfBirth
                    ? colors.blue
                    : colors.darkGrey,
              },
              buttonContainer,
            ]}
            titleStyle={buttonTitleStyle}
            // disabled={!isAllInputFilled ? true : false}
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