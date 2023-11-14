import { View, Text, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Box } from '../../../ui/components/layout';

export function PinLogin() {
  return (
    <Box>
      <FontAwesome
        name="close"
        size={40}
        color="white"
        style={{ marginLeft: 'auto' }}
      />
      <View style={{alignItems: "center"}}>
        <Text>Welcome back Ifeanyi</Text>
        <Text>Enter your PIN</Text>
        <View>
            
        </View>
      </View>
    </Box>
  );
}
