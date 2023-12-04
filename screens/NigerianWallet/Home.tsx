import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

import { BoxII } from '../../ui/components/layout';
import { userData } from '../onboarding/auth/state/userDataState';
import { Button } from '../../ui/components/layout';
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { colors } from '../../ui/theme/design-system/colors';
import { navigate } from '../../utils/navigation';
import { KnowYourCustomerData } from './state/KnowYourCustomerData';

import GiftIcon from '../../assets/NigerianWalletsAssets/home/giftIcon.svg';
import NotificationIcon from '../../assets/NigerianWalletsAssets/home/notificationIcon.svg';
import NotificationBadgeIcon from '../../assets/NigerianWalletsAssets/home/notificationBadgeIcon.svg';
import RightIcon from '../../assets/NigerianWalletsAssets/home/rightIcon.svg';
import NairaIcon from '../../assets/NigerianWalletsAssets/home/NairaIcon.svg';
import BritainFlag from '../../assets/NigerianWalletsAssets/home/britainFlag.svg';
import EuroFlag from '../../assets/NigerianWalletsAssets/home/euroFlag.svg';
import SwapIcon from '../../assets/NigerianWalletsAssets/home/swapIcon.svg';
import TuitionIcon from '../../assets/NigerianWalletsAssets/home/tuitionIcon.svg';
import CryptoIcon from '../../assets/NigerianWalletsAssets/home/cryptoIcon.svg';

export function Home() {
  const { currencyWallet } = userData();
  const { verificationID, isUserVerified } = KnowYourCustomerData();
  const { buttonContainer, buttonTitleStyle } = customStyles;
  const [isNotification, setIsNotification] = useState(true);

  console.log(isUserVerified);
  return (
    <BoxII>
      <View style={firstWrapper}>
        <Text style={homeTextStyle}>Home</Text>
        <View style={giftIconWrapper}>
          <Pressable onPress={() => alert('Gift card!')}>
            <GiftIcon />
          </Pressable>
          {!isNotification ? (
            <Pressable onPress={() => alert('No notification')}>
              <NotificationIcon />
            </Pressable>
          ) : (
            <Pressable onPress={() => alert('You got a notification')}>
              <NotificationBadgeIcon />
            </Pressable>
          )}
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <View style={firstContainer}>
          <View style={balanceWrapper}>
            <Text style={balanceTextStyle}>{currencyWallet} Balance</Text>
            <Pressable
              style={accountWrapper}
              onPress={() => alert('account details')}>
              {isUserVerified ? (
                <Text style={{ color: '#FFE195' }}>{isUserVerified}</Text>
              ) : (
                <Text style={{ color: colors.grey }}>Account details</Text>
              )}
              {!isUserVerified && <RightIcon style={{ marginLeft: 10 }} />}
            </Pressable>
          </View>
          <Text style={accountBalanceStyle}>
            <NairaIcon /> 0.00
          </Text>
          <View style={buttonWrapper}>
            <Button
              handleOnPress={() => navigate('VerifyIdentity')}
              title="Add Money"
              // @ts-expect-error
              containerStyle={[
                buttonContainer,
                { backgroundColor: colors.darkGrey, width: '45%' },
              ]}
              titleStyle={buttonTitleStyle}
            />
            <Button
              handleOnPress={() => navigate('VerifyIdentity')}
              title="Transfer"
              // @ts-expect-error
              containerStyle={[
                buttonContainer,
                { backgroundColor: colors.darkGrey, width: '45%' },
              ]}
              titleStyle={buttonTitleStyle}
            />
          </View>
        </View>
        <View style={secondContainer}>
          <Pressable
            style={foreignAccountWrapper}
            onPress={() => alert('account details')}>
            <BritainFlag />
            <View style={openForeignAccountWrapper}>
              <Text
                style={{
                  color: colors.light,
                  fontWeight: '500',
                }}>
                Open GBP {'\n'}Balance
              </Text>
              <RightIcon />
            </View>
          </Pressable>
          <Pressable
            style={foreignAccountWrapper}
            onPress={() => alert('account details')}>
            <EuroFlag />
            <View style={openForeignAccountWrapper}>
              <Text
                style={{
                  color: colors.light,
                  fontWeight: '500',
                }}>
                Open EUR {'\n'}Balance{' '}
              </Text>
              <RightIcon />
            </View>
          </Pressable>
        </View>
      </View>
      <View style={thirdContainer}>
        <Text style={moreWithFlyt}>Do more with Flyt</Text>
        <View style={{ gap: 45 }}>
          <Pressable
            style={flytTransactionOptionsWrapper}
            onPress={() => alert('account details')}>
            <SwapIcon />
            <View>
              <Text style={mainCaptionStyle}>Convert Money</Text>
              <Text style={subCaptionStyle}>Swap between currencies</Text>
            </View>
            <RightIcon style={{ marginLeft: 'auto' }} />
          </Pressable>
          <Pressable
            style={flytTransactionOptionsWrapper}
            onPress={() => alert('account details')}>
            <TuitionIcon />
            <View>
              <Text style={mainCaptionStyle}>Tuition Payment</Text>
              <Text style={subCaptionStyle}>Pay your tuition in seconds</Text>
            </View>
            <RightIcon style={{ marginLeft: 'auto' }} />
          </Pressable>
          <Pressable
            style={flytTransactionOptionsWrapper}
            onPress={() => alert('account details')}>
            <CryptoIcon />
            <View>
              <Text style={mainCaptionStyle}>Crypto Deposits</Text>
              <Text style={subCaptionStyle}>Fund with crypto</Text>
            </View>
            <RightIcon style={{ marginLeft: 'auto' }} />
          </Pressable>
        </View>
      </View>
    </BoxII>
  );
}

const styles = StyleSheet.create({
  firstWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  homeTextStyle: { color: colors.light, fontSize: 24, fontWeight: '500' },
  giftIconWrapper: { flexDirection: 'row', alignItems: 'center', gap: 40 },
  firstContainer: {
    backgroundColor: colors.dark,
    padding: 16,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 180,
  },
  balanceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceTextStyle: { color: colors.light, fontSize: 16, fontWeight: '500' },
  accountWrapper: { flexDirection: 'row', alignItems: 'center' },
  accountBalanceStyle: {
    fontSize: 30,
    color: colors.light,
    marginVertical: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  secondContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  foreignAccountWrapper: {
    backgroundColor: colors.dark,
    width: '46%',
    height: 150,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  openForeignAccountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  thirdContainer: { backgroundColor: colors.dark, marginTop: 20, padding: 20 },
  moreWithFlyt: {
    fontSize: 18,
    color: colors.light,
    fontWeight: '500',
    marginBottom: 20,
  },
  flytTransactionOptionsWrapper: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  mainCaptionStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.light,
  },
  subCaptionStyle: { color: colors.grey, marginTop: 2 },
});

const {
  firstWrapper,
  homeTextStyle,
  giftIconWrapper,
  firstContainer,
  balanceWrapper,
  balanceTextStyle,
  accountWrapper,
  accountBalanceStyle,
  buttonWrapper,
  secondContainer,
  foreignAccountWrapper,
  openForeignAccountWrapper,
  thirdContainer,
  moreWithFlyt,
  flytTransactionOptionsWrapper,
  mainCaptionStyle,
  subCaptionStyle,
} = styles;
