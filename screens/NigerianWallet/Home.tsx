import { View, Text } from 'react-native';
import React from 'react';

import { Box } from '../../ui/components/layout';
import { userData } from '../onboarding/auth/state/userDataState';
import { Button } from '../../ui/components/layout';
import { styles } from '../../ui/theme/design-system/styles';
import { colors } from '../../ui/theme/design-system/colors';

import GiftIcon from '../../assets/NigerianWalletsAssets/home/giftIcon.svg';
import NotificationIcon from '../../assets/NigerianWalletsAssets/home/notificationIcon.svg';
import NotificationBadgeIcon from '../../assets/NigerianWalletsAssets/home/notificationBadgeIcon.svg';
import RightIcon from '../../assets/NigerianWalletsAssets/home/rightIcon.svg';
import NairaIcon from '../../assets/NigerianWalletsAssets/home/NairaIcon.svg';

export function Home() {
  const { currencyWallet } = userData();
  const { buttonContainer, buttonTitleStyle } = styles;
  return (
    <Box>
      <View>
        <Text>Home</Text>
        <View>
          <GiftIcon />
          <NotificationIcon />
          <NotificationBadgeIcon />
        </View>
      </View>
      <View>
        <View>
          <Text>{currencyWallet} Balance</Text>
          <Text>
            Account details <RightIcon />
          </Text>
        </View>
        <Text>
          <NairaIcon />N 0.00
        </Text>
        <View>
          <Button
            handleOnPress={() => alert('Add Money')}
            title="Add Money"
            // @ts-expect-error
            containerStyle={[
              buttonContainer,
              { backgroundColor: colors.darkGrey },
            ]}
            titleStyle={buttonTitleStyle}
          />
          <Button
            handleOnPress={() => alert('Transfer')}
            title="Transfer"
            // @ts-expect-error
            containerStyle={[
              buttonContainer,
              { backgroundColor: colors.darkGrey },
            ]}
            titleStyle={buttonTitleStyle}
          />
        </View>
      </View>
    </Box>
  );
}
