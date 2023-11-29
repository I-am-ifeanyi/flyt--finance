import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Box } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';
import { Button } from '../../../../ui/components/layout';
import { styles as customStyles } from '../../../../ui/theme/design-system/styles';
import { userData } from '../state/userDataState';
import { navigate } from '../../../../utils/navigation';

import CloseIcon from '../../../../assets/icons/closeIcon.svg';
import NotificationIcon from '../../../../assets/icons/notification.svg';

export function TurnNotification() {
  const { buttonContainer, buttonTitleStyle } = customStyles;
  const { updateIsEnablePushNotifications, isEnablePushNotifications } = userData();

  console.log(isEnablePushNotifications);
  return (
    <Box>
      <CloseIcon style={{ marginLeft: 'auto' }} />
      <View style={infoContainer}>
        <View style={iconStyle}>
          <NotificationIcon />
        </View>
        <Text style={{ color: colors.light, fontSize: 24, fontWeight: '500' }}>
          Enable push notifications
        </Text>
        <Text style={{ color: colors.grey, fontSize: 16 }}>
          We will notify you when something {'\n'}important happens like changes
          to {'\n'}your wallet balance and security alerts.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: 'auto',
        }}>
        <Button
          handleOnPress={() => {
            updateIsEnablePushNotifications(false);
          }}
          //@ts-expect-error
          containerStyle={[
            buttonContainer,
            { backgroundColor: colors.grey, width: '45%' },
          ]}
          titleStyle={buttonTitleStyle}
          title="Not now"
        />
        <Button
          handleOnPress={() => {
            updateIsEnablePushNotifications(true);
          }}
          //@ts-expect-error
          containerStyle={[
            buttonContainer,
            { backgroundColor: colors.blue, width: '45%' },
          ]}
          titleStyle={buttonTitleStyle}
          title="Enable"
        />
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 50,
    height: 50,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  infoContainer: {
    gap: 20,
    marginTop: 40,
  },
});

const { iconStyle, infoContainer } = styles;
