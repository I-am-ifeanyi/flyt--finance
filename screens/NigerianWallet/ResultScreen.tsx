import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { BoxII } from '../../ui/components/layout';
import { addMoneyToWallet } from './state/AddMoneyToWallet';
import { userData } from '../onboarding/auth/state/userDataState';
import { colors } from '../../ui/theme/design-system/colors';
import { Button } from '../../ui/components/layout';
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { formatter } from '../../utils/currencyFormat';
import { navigate } from '../../utils/navigation';

import SuccessIcon from '../../assets/NigerianWalletsAssets/successIcon.svg';

export function ResultScreen() {
  const { amountToAdd } = addMoneyToWallet();
  const { currencyWallet } = userData();
  const { buttonContainer, buttonTitleStyle } = customStyles;

  const sentAmount = formatter.format(amountToAdd);

  return (
    <BoxII>
      <View style={mainContainer}>
        <SuccessIcon />
        <Text style={mainCaption}>{sentAmount}</Text>
        <Text style={subCaption}>Added to {currencyWallet} Balance</Text>
      </View>
      <View style={buttonWrapper}>
        <Button
          handleOnPress={() => navigate('Home')}
          // @ts-expect-error
          containerStyle={[buttonContainer, { backgroundColor: colors.blue }]}
          titleStyle={buttonTitleStyle}
          title="Done"
        />
      </View>
    </BoxII>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  mainCaption: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '500',
    color: colors.light,
  },
  subCaption: {
    color: colors.grey,
  },
  buttonWrapper: { width: '100%', marginTop: 'auto', paddingHorizontal: 20 },
});

const { mainCaption, subCaption, mainContainer, buttonWrapper } = styles;
