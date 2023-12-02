import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { BoxII } from '../../ui/components/layout';
import { userData } from '../onboarding/auth/state/userDataState';
import { Button } from '../../ui/components/layout';
import { styles as customStyles } from '../../ui/theme/design-system/styles';
import { colors } from '../../ui/theme/design-system/colors';

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
  const { buttonContainer, buttonTitleStyle } = customStyles;
  const [isNotification, setIsNotification] = useState(true);
  return (
    <BoxII>
      <View style={firstWrapper}>
        <Text style={{ color: colors.light, fontSize: 24, fontWeight: '500' }}>
          Home
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 40 }}>
          <GiftIcon />
          {!isNotification ? <NotificationIcon /> : <NotificationBadgeIcon />}
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <View style={{ backgroundColor: colors.dark, padding: 16, borderRadius: 20, justifyContent: "space-between", flexDirection: "column", height: 200 }}>
          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text
              style={{ color: colors.light, fontSize: 16, fontWeight: '500' }}>
              {currencyWallet} Balance
            </Text>
            <Text style={{color: colors.grey}}>
              Account details <RightIcon style={{marginBottom: -2, marginLeft: 10}} />
            </Text>
          </View>
          <Text style={{fontSize: 30, color: colors.light, marginVertical: 20}}>
            <NairaIcon /> 0.00
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
            <Button
              handleOnPress={() => alert('Add Money')}
              title="Add Money"
              // @ts-expect-error
              containerStyle={[
                buttonContainer,
                { backgroundColor: colors.darkGrey, width: '45%' },
              ]}
              titleStyle={buttonTitleStyle}
            />
            <Button
              handleOnPress={() => alert('Transfer')}
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
        <View>
          <View>
            <BritainFlag />
            <View>
              <Text>Open GBP {'\n'}Balance</Text>
              <RightIcon />
            </View>
          </View>
          <View>
            <EuroFlag />
            <View>
              <Text>Open EUR {'\n'}Balance</Text>
              <RightIcon />
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text>Do more with Flyt</Text>
        <View>
          <View>
            <SwapIcon />
            <View>
              <Text>Convert Money</Text>
              <Text>Swap between currencies</Text>
            </View>
            <RightIcon />
          </View>
          <View>
            <TuitionIcon />
            <View>
              <Text>Tuition Payment</Text>
              <Text>Pay your tuition in seconds</Text>
            </View>
            <RightIcon />
          </View>
          <View>
            <CryptoIcon />
            <View>
              <Text>Crypto Deposits</Text>
              <Text>Fund with crypto</Text>
            </View>
            <RightIcon />
          </View>
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
    marginTop: 20
  },
});

const { firstWrapper } = styles;
