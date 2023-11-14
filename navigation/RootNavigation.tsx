import { createStackNavigator } from '@react-navigation/stack';

import { LoginNavigationStack } from './auth/LoginNavigationStack';

// import Tabs from './Tabs';

export default function RootNavigation() {
  
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="LoginNavigationStack"
      screenOptions={{ headerShown: false }}>
      <Screen name="LoginNavigationStack" component={LoginNavigationStack} />
    </Navigator>
  );
}
