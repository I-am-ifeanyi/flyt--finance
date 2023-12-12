import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import React, { ReactNode } from 'react';

import { NigerianWalletStack } from './NigerianWallet/NigerianWalletStack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../ui/theme/design-system/colors';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountsActive from '../assets/tabBar-assets/accountsActive.svg';
import AccountsInactive from '../assets/tabBar-assets/accountsInactive.svg';
import CardsActive from '../assets/tabBar-assets/cardsActive.svg';
import CardsInactive from "../assets/tabBar-assets/cardsInactive.svg"
import SearchActive from '../assets/tabBar-assets/searchActive.svg';
import SearchInactive from '../assets/tabBar-assets/searchInactive.svg';
import SettingsActive from '../assets/tabBar-assets/settingsActive.svg';
import SettingsInactive from '../assets/tabBar-assets/settingsInactive.svg';

const LogoActive = require('../assets/logo-assets/whiteLogo.png');
const LogoInactive = require("../assets/logo-assets/grayLogo.png")
 
import { Home } from '../screens/NigerianWallet';

export default function Tabs() {
  const { Navigator, Screen } = createBottomTabNavigator();


  const tabObjects = [
    {
      tabName: 'Home',
      activeTabIcon: (
        <Image source={LogoActive} style={{ width: 30, height: 30 }} />
      ),
      inActiveTabIcon: (
        <Image source={LogoInactive} style={{ width: 30, height: 30 }} />
      ),
      tabComponent: Home,
    },
    {
      tabName: 'Accounts',
      activeTabIcon: <AccountsActive />,
      inActiveTabIcon: <AccountsInactive />,
      tabComponent: Home,
    },
    {
      tabName: 'Search',
      activeTabIcon: <SearchActive />,
      inActiveTabIcon: <SearchInactive />,
      tabComponent: Home,
    },
    {
      tabName: 'Cards',
      activeTabIcon: <CardsActive />,
      inActiveTabIcon: <CardsInactive />,
      tabComponent: Home,
    },
    {
      tabName: 'Settings',
      activeTabIcon: <SettingsActive />,
      inActiveTabIcon: <SettingsInactive />,
      tabComponent: Home,
    },
  ];

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 100 : 70,
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: Platform.OS === 'ios' ? 2 : 0,
          borderTopColor: colors.darkGrey,
        },
        tabBarShowLabel: false,
      }}>
      {tabObjects.map((item, index) => {
        return (
          <Screen
            key={index}
            name={item.tabName}
            component={item.tabComponent}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <View>
                    {focused ? item.activeTabIcon : item.inActiveTabIcon}
                  </View>
                </View>
              ),
            }}
          />
        );
      })}
    </Navigator>
  );
}

// const styles = StyleSheet.create({
//   shadow: {
//     shadowOffset: {
//       width: 1,
//       height: 10,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     elevation: 10,
//   },
// });
