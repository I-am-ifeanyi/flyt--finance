import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { BoxII } from '../../ui/components/layout';
import { Button } from '../../ui/components/layout';
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { colors } from '../../ui/theme/design-system/colors';

import VerifyIdentityIcon from '../../assets/NigerianWalletsAssets/verifyIdentityIcon.svg';
import CloseIcon from '../../assets/icons/closeIcon.svg';

export function VerifyIdentity({ navigation }: any) {
  const { buttonContainer, buttonTitleStyle } = customStyles;
  return (
    <BoxII>
      <View style={mainContainer}>
        <TouchableOpacity
          style={{ marginLeft: 'auto', marginTop: 10 }}
          onPress={() => navigation.goBack()}>
          <CloseIcon />
        </TouchableOpacity>

        <View style={subContainer}>
          <VerifyIdentityIcon />
          <Text style={mainCaption}>
            We need a little more {'\n'}information to proceed
          </Text>
          <Text style={subCaption}>
            Getting account details from Flyt {'\n'} requires you to provide
            some personal {'\n'} information
          </Text>
        </View>
        <Button
          title="Continue"
          handleOnPress={() => navigation.navigate('EnterBVN')}
          //@ts-expect-error
          containerStyle={[
            buttonContainer,
            { backgroundColor: colors.blue, marginTop: 'auto' },
          ]}
          titleStyle={buttonTitleStyle}
        />
      </View>
    </BoxII>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  mainCaption: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.light,
  },
  subCaption: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.grey,
  },
});

const { mainContainer, subContainer, mainCaption, subCaption } = styles;
