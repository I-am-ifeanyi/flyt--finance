import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils/navigation';

import 'react-native-gesture-handler';

import RootNavigation from './navigation/RootNavigation';
import { Box } from './ui/components/layout';

export default function App() {
  return (
    <Box>
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
      <StatusBar style="light" />
    </Box>
  );
}


