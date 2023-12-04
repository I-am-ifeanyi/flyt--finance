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
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { Button } from '../../ui/components/layout';
import { navigate } from '../../utils/navigation';

import LeftIcon from '../../assets/icons/leftIcon.svg';
import KeyIcon from '../../assets/NigerianWalletsAssets/keyIcon.svg';
import NationalIdIcon from '../../assets/NigerianWalletsAssets/nationalIdIcon.svg';
import PassportIcon from '../../assets/NigerianWalletsAssets/passportIcon.svg';
import DriversLicenseIcon from '../../assets/NigerianWalletsAssets/driversLicenseIcon.svg';

export function VerifyWithID({ navigation }: any) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { buttonContainer, buttonTitleStyle } = customStyles;

  const { updateVerificationID, updateIsUserVerified } = KnowYourCustomerData();

  const [verifyWith, setVerifyWith] = useState({
    nationalID: false,
    internationalPassport: false,
    driversLicense: false,
  });

  const [verificationID, setVerificationID] = useState('');
  const { nationalID, internationalPassport, driversLicense } = verifyWith;

  const selectNationalId = () => {
    setVerifyWith({
      nationalID: true,
      internationalPassport: false,
      driversLicense: false,
    });
    setVerificationID('National ID');
  };

  const selectPassport = () => {
    setVerifyWith({
      nationalID: false,
      internationalPassport: true,
      driversLicense: false,
    });
    setVerificationID('International Passport');
  };

  const selectDriversLicense = () => {
    setVerifyWith({
      nationalID: false,
      internationalPassport: false,
      driversLicense: true,
    });
    setVerificationID("Driver's License");
  };

  const onSubmit = () => {
    updateVerificationID(verificationID);
    updateIsUserVerified('Pending Verification');
    navigate("Home")
  };
  return (
    <BoxII>
      <View style={mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftIcon />
        </TouchableOpacity>
        <Text style={mainCaption}>
          Verify your identity with{'\n'}one of these documents
        </Text>
        <View style={subContainer}>
          <KeyIcon />

          <Text style={subCaption}>Your data is processed securely</Text>
        </View>
        <TouchableOpacity
          onPress={selectNationalId}
          style={[
            idContainer,
            {
              borderWidth: nationalID ? 2 : 0,
              borderColor: colors.light,
              borderRadius: 10,
            },
          ]}>
          <NationalIdIcon />
          <Text style={[mainCaption, { fontSize: 17 }]}>National ID (NIN)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={selectPassport}
          style={[
            idContainer,
            {
              borderWidth: internationalPassport ? 2 : 0,
              borderColor: colors.light,
              borderRadius: 10,
            },
          ]}>
          <PassportIcon />
          <Text style={[mainCaption, { fontSize: 17 }]}>
            International Passport
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={selectDriversLicense}
          style={[
            idContainer,
            {
              borderWidth: driversLicense ? 2 : 0,
              borderColor: colors.light,
              borderRadius: 10,
            },
          ]}>
          <DriversLicenseIcon />
          <Text style={[mainCaption, { fontSize: 17 }]}>Driver's License</Text>
        </TouchableOpacity>

        <KeyboardAvoidingView
          style={{ marginTop: 'auto' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Button
            title="Continue"
            handleOnPress={onSubmit}
            //@ts-expect-error
            containerStyle={[
              buttonContainer,
              {
                backgroundColor:
                  nationalID || internationalPassport || driversLicense
                    ? colors.blue
                    : colors.darkGrey,
                marginBottom: 80,
              },
            ]}
            titleStyle={buttonTitleStyle}
            disabled={
              nationalID || internationalPassport || driversLicense
                ? false
                : true
            }
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
    gap: 10,
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
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    height: 60,
    paddingLeft: 10,
  },
});

const { mainContainer, subContainer, mainCaption, subCaption, idContainer } =
  styles;
