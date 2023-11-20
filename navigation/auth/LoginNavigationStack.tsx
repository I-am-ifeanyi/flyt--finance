import {
  createStackNavigator,
} from '@react-navigation/stack';

import { PinLogin } from '../../screens/onboarding/auth';
import { Onboarding } from '../../screens/onboarding';
import { BottomSheetTransition } from '../../utils/navigation';

export const LoginNavigationStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="PinLogin"
      screenOptions={{ headerShown: false }}>
      <Screen name="Onboarding" component={Onboarding} />
      <Screen
        options={BottomSheetTransition}
        name="PinLogin"
        component={PinLogin}
      />
    </Navigator>
  );
};
