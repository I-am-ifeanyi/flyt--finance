import { createStackNavigator } from '@react-navigation/stack';

import { LoginNavigationStack } from './auth/LoginNavigationStack';
import { SignUpNavigationStack } from './auth/SignUpNavigationStack';

// import Tabs from './Tabs';

export default function RootNavigation() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="SignUpNavigationStack"
      screenOptions={{ headerShown: false }}>
      <Screen name="LoginNavigationStack" component={LoginNavigationStack} />
      <Screen name="SignUpNavigationStack" component={SignUpNavigationStack} />
    </Navigator>
  );
}
