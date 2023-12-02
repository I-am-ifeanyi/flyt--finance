import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { navigationRef } from './utils/navigation';
import Provider from './services/queries/Provider';
import { Box } from './ui/components/layout';

import RootNavigation from './navigation/RootNavigation';

export default function App() {
  return (
      <Provider>
        <NavigationContainer ref={navigationRef}>
          <RootNavigation />
        </NavigationContainer>
        <StatusBar style="light" />
        <Toast />
      </Provider>
  );
}
