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

export function ChooseUserName({ navigation }: any) {
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
  const { userName, updateUserName } = userData();
  const [initialUserName, setInitialUserName] = useState('');
  const [isUserNameTaken, setIsUserNameTaken] = useState(false);

  const onSubmit = (data: any) => {
    const finalUserName = initialUserName?.toLocaleLowerCase();
    if (finalUserName === userName) {
      setIsUserNameTaken(true);
      return;
    } else {
        updateUserName(finalUserName)
        navigate('EnterEmail');
        setInitialUserName('')
    };
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
          <Text style={textStyle}>Choose a username</Text>
          <View style={{ paddingRight: 100 }}>
            <Text style={{ color: colors.grey, marginTop: 20 }}>
              This is a unique ID for receiving payment from anyone on Flyt
            </Text>
          </View>
        </View>
        <View
          style={[
            inputWrapperStyle,
            { borderBottomWidth: 0, borderBottomColor: 'transparent' },
          ]}>
          <Text style={{ color: colors.light, fontSize: 20 }}>@</Text>
          <TextInput
            value={initialUserName}
            textInputField={'userName'}
            placeholder={'username'}
            keyboardType={'default'}
            selectTextOnFocus={true}
            placeholderTextColor={'#777776'}
            editable={true}
            onSubmitEditing={data => setInitialUserName(data.userAddress)}
            handleChange={data => {
              setInitialUserName(data);
              setIsUserNameTaken(false);
            }}
            control={control}
            inputWrapperStyle={inputWrapperStyle}
            // @ts-expect-error
            inputStyle={[
              inputStyle,
              { marginBottom: errors?.userName ? -25 : 0 },
            ]}
            errorMessage={errors?.userName?.message}
            isDisplayPasswordIcon={true}
            rules={{
              required: 'Please enter username',
              minLength: { value: 5, message: 'Minimum length is 5' },
            }}
          />
        </View>
        {isUserNameTaken && (
          <Text style={{ marginTop: 10, color: colors.reddish, fontSize: 12 }}>
            Sorry, this username is already taken
          </Text>
        )}
        <View style={{ marginTop: 'auto', gap: 30 }}>
          <Button
            handleOnPress={handleSubmit(onSubmit)}
            title="Continue"
            // @ts-expect-error
            containerStyle={[
              {
                backgroundColor: initialUserName
                  ? colors.blue
                  : colors.darkGrey,
              },
              buttonContainer,
            ]}
            titleStyle={buttonTitleStyle}
            disabled={!initialUserName ? true : false}
          />
        </View>
      </KeyboardAvoidingView>
    </Box>
  );
}



