import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { BoxII } from '../../ui/components/layout';
import { userData } from '../onboarding/auth/state/userDataState';
import { addMoneyToWallet } from './state/AddMoneyToWallet';
import { colors } from '../../ui/theme/design-system/colors';
import { Button } from '../../ui/components/layout';
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { Loader } from '../../ui/components/general';

import TextInput from '../../ui/form/TextInput';

import LeftIcon from '../../assets/icons/leftIcon.svg';
import KeyIcon from '../../assets/NigerianWalletsAssets/keyIcon.svg';
import AmericanExpressLogo from '../../assets/NigerianWalletsAssets/paymentIcons/american-express.svg';
import MasterCardLogo from '../../assets/NigerianWalletsAssets/paymentIcons/mastercard.svg';
import VisaCardLogo from '../../assets/NigerianWalletsAssets/paymentIcons/visa.svg';

type cardDetails = {
  cardNumber: number | undefined | string;
  expiryMonth: number | undefined;
  expiryYear: number | undefined;
  cvv: number | undefined;
};

export function AddCard({ navigation }: any) {
  const {
    legalInfo: { firstName, lastName },
  } = userData();
  const { updateUserCardDetails, updateCurrentBalance, amountToAdd } = addMoneyToWallet();
  const expiryMonthInputRef = useRef(null);
  const expiryYearInputRef = useRef(null);
  const cvvInputRef = useRef(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { buttonContainer, buttonTitleStyle } = customStyles;
  const [differentCards, setDifferentCards] = useState({
    masterCard: false,
    visaCard: false,
    americanExpress: false,
  });
  const [cardDetails, setCardDetails] = useState<cardDetails>({
    cardNumber: undefined,
    expiryMonth: undefined,
    expiryYear: undefined,
    cvv: undefined,
  });
  3;
  const { americanExpress, masterCard, visaCard } = differentCards;
  const { cardNumber, cvv, expiryMonth, expiryYear } = cardDetails;
  const [isPay, setIsPay] = useState(false);

  const handleCardNumberInput = (data: number | string) => {
    // Remove non-numeric characters
    const numericData = typeof data === 'string' ? data.replace(/\D/g, '') : '';
    let formattedData = numericData
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ');

    // Update the state with the formatted value
    setCardDetails(prevDetail => ({
      ...prevDetail,
      cardNumber: formattedData,
    }));

    // @ts-expect-error
    if (data?.length >= 19) {
      // @ts-expect-error
      expiryMonthInputRef.current.focus();
    }

    if (formattedData?.startsWith('4')) {
      setDifferentCards({
        masterCard: false,
        visaCard: true,
        americanExpress: false,
      });
    } else if (formattedData?.startsWith('5')) {
      setDifferentCards({
        masterCard: true,
        visaCard: false,
        americanExpress: false,
      });
    } else if (formattedData?.startsWith('3')) {
      setDifferentCards({
        masterCard: false,
        visaCard: false,
        americanExpress: true,
      });
    } else
      setDifferentCards({
        masterCard: false,
        visaCard: false,
        americanExpress: false,
      });
  };

  const handleExpiryMonthSubmit = (data: any) => {
    setCardDetails(prevDetail => ({
      ...prevDetail,
      expiryMonth: data,
    }));
    if (data?.length >= 2) {
      // @ts-expect-error
      expiryYearInputRef.current.focus();
    }
  };
  const handleExpiryYearSubmit = (data: any) => {
    setCardDetails(prevDetail => ({
      ...prevDetail,
      expiryYear: data,
    }));
    if (data?.length >= 2) {
      // @ts-expect-error
      cvvInputRef.current.focus();
    }
  };

  const handleCVVSubmit = (data: any) => {
    setCardDetails(prevDetail => ({
      ...prevDetail,
      cvv: data,
    }));
    if (data?.length >= 3) {
      // @ts-expect-error
      cvvInputRef.current.blur();
    }
  };

  const isFormFilled =
    cardNumber && cvv && expiryMonth && expiryYear ? true : false;

  const onSubmit = (data: any) => {
    updateUserCardDetails(cardDetails);
    updateCurrentBalance(amountToAdd)
    setIsPay(true);
    setTimeout(() => {
      navigation.navigate('ResultScreen');
    }, 3000);
  };

  if (isPay) {
    return <Loader />;
  }

  return (
    <BoxII>
      <View style={mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftIcon />
        </TouchableOpacity>
        <View>
          <Text style={mainCaption}>Add your debit card</Text>
          <Text style={subCaption}>
            Card must be in your name {'\n'}
            {firstName} {lastName}
          </Text>
        </View>
        <View style={{ width: '100%', gap: 30 }}>
          <View
            style={[
              inputWrapper,
              { width: '100%', justifyContent: 'space-between' },
            ]}>
            <TextInput
              value={cardNumber}
              control={control}
              editable={true}
              textInputField="cardNumber"
              handleChange={data => handleCardNumberInput(data)}
              keyboardType="numeric"
              placeholder="Card Number"
              inputStyle={cardInputStyle}
              inputWrapperStyle={{
                backgroundColor: 'transparent',
              }}
              selectTextOnFocus={false}
              rules={{
                maxLength: {
                  value: 19,
                  message: 'Number must not exceed 16 digits',
                },
              }}
              errorMessage={errors?.cardNumber?.message}
            />
            <View>
              {americanExpress && <AmericanExpressLogo />}
              {masterCard && <MasterCardLogo />}
              {visaCard && <VisaCardLogo />}
            </View>
          </View>
          <View style={subWrapper}>
            <View style={[inputWrapper, { width: '45%' }]}>
              <TextInput
                control={control}
                editable={true}
                textInputField="expiryMonth"
                handleChange={data => handleExpiryMonthSubmit(data)}
                keyboardType="numeric"
                placeholder="MM"
                // @ts-ignore
                inputStyle={[
                  cardInputStyle,
                  {
                    width: 35,
                    textAlign: 'center',
                  },
                ]}
                inputWrapperStyle={{ backgroundColor: 'transparent' }}
                selectTextOnFocus={false}
                inputRef={expiryMonthInputRef}
                rules={{
                  maxLength: {
                    value: 2,
                    message: 'Number must not exceed 2 digits',
                  },
                }}
              />
              <Text style={{ color: colors.grey }}> /</Text>
              <TextInput
                control={control}
                editable={true}
                textInputField="expiryDate"
                handleChange={data => handleExpiryYearSubmit(data)}
                keyboardType="numeric"
                placeholder="YY"
                // @ts-ignore
                inputStyle={[
                  cardInputStyle,
                  {
                    width: 35,
                    textAlign: 'center',
                  },
                ]}
                inputWrapperStyle={{ backgroundColor: 'transparent' }}
                selectTextOnFocus={false}
                inputRef={expiryYearInputRef}
                rules={{
                  maxLength: {
                    value: 2,
                    message: 'Number must not exceed 2 digits',
                  },
                }}
              />
            </View>
            <View style={[inputWrapper, { width: '45%' }]}>
              <TextInput
                control={control}
                editable={true}
                textInputField="cvv"
                keyboardType="numeric"
                handleChange={data => handleCVVSubmit(data)}
                placeholder="CVV"
                // @ts-ignore
                inputStyle={[cardInputStyle, { width: 100 }]}
                inputWrapperStyle={{ backgroundColor: 'transparent' }}
                selectTextOnFocus={false}
                inputRef={cvvInputRef}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <KeyIcon />
            <Text style={{ color: colors.grey }}>
              Secured with 256-bit encryption
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ marginTop: 'auto', marginBottom: 10 }}>
          <Button
            handleOnPress={handleSubmit(onSubmit)}
            title="Pay"
            // @ts-expect-error
            containerStyle={[
              buttonContainer,
              { backgroundColor: isFormFilled ? colors.blue : colors.darkGrey },
            ]}
            titleStyle={buttonTitleStyle}
            disabled={!isFormFilled}
          />
        </KeyboardAvoidingView>
      </View>
    </BoxII>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
  mainCaption: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.light,
  },
  subCaption: { fontSize: 16, marginVertical: 5, color: colors.grey },
  cardInputStyle: {
    width: 300,
    color: colors.light,
    fontSize: 18,
    height: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrey,
    height: 50,
  },
  subWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const {
  mainContainer,
  mainCaption,
  subCaption,
  cardInputStyle,
  inputWrapper,
  subWrapper,
} = styles;
