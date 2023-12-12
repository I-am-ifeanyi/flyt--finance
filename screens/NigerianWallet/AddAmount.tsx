import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { BoxII } from '../../ui/components/layout';
import { userData } from '../onboarding/auth/state/userDataState';
import { addMoneyToWallet } from './state/AddMoneyToWallet';
import { colors } from '../../ui/theme/design-system/colors';
import { Button } from '../../ui/components/layout';
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { navigate } from '../../utils/navigation';

import TextInput from '../../ui/form/TextInput';

import CloseIcon from '../../assets/icons/closeIcon.svg';

export function AddAmount({navigation}: any) {
  const { currencyWallet } = userData();
  const { updateAmountToAdd, amountToAdd } = addMoneyToWallet();
  const { control, handleSubmit } = useForm();
  const { buttonContainer, buttonTitleStyle } = customStyles;

  const [selectedAmount, setSelectedAmount] = useState<number | undefined>(
    undefined,
  );

  const onSubmit = () => {
    updateAmountToAdd(selectedAmount);
    navigate("AddCard")
  };

  return (
    <BoxII>
      <View style={mainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 'auto' }}>
          <CloseIcon />
        </TouchableOpacity>
        <View>
          <Text style={mainCaption}>
            Add money to{'\n'}
            {currencyWallet} Balance
          </Text>
          <Text style={subCaption}>&#x20A6;0 available</Text>
          <TextInput
            control={control}
            editable={true}
            selectTextOnFocus={true}
            textInputField="amount"
            handleChange={data => setSelectedAmount(data)}
            keyboardType="numeric"
            placeholderTextColor={colors.grey}
            value={selectedAmount}
            placeholder="0"
            inputStyle={inputStyle}
          />
          <View style={walletWrapper}>
            <Text style={walletStyle}>{currencyWallet}</Text>
          </View>
        </View>
        <KeyboardAvoidingView
          style={{ marginTop: 'auto', width: '100%', marginBottom: 0 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Button
            handleOnPress={handleSubmit(onSubmit)}
            title="Add"
            // @ts-expect-error
            containerStyle={[
              buttonContainer,
              {
                backgroundColor: selectedAmount ? colors.blue : colors.darkGrey,
                marginBottom: 80,
              },
            ]}
            titleStyle={buttonTitleStyle}
            disabled={selectedAmount ? false : true}
          />
        </KeyboardAvoidingView>
      </View>
    </BoxII>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '500',
    color: colors.light,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 50,
  },
  mainCaption: {
    color: colors.light,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  subCaption: {
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
  walletWrapper: {
    backgroundColor: colors.darkGrey,
    width: 50,
    height: 30,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 150,
  },
  walletStyle: {
    color: colors.light,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
  },
});

const {
  inputStyle,
  mainContainer,
  mainCaption,
  subCaption,
  walletWrapper,
  walletStyle,
} = styles;
