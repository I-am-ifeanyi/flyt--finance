import { createStackNavigator } from '@react-navigation/stack';

import { EnterPhoneNumber } from '../../screens/onboarding/auth/signUp';
import { EnterCodeSent } from '../../screens/onboarding/auth/signUp';
import { CreatePassword } from '../../screens/onboarding/auth/signUp/CreatePassword';
import { LegalInfo } from '../../screens/onboarding/auth/signUp';
import { EnterAddress } from '../../screens/onboarding/auth/signUp';

export const SignUpNavigationStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="EnterAddress"
      screenOptions={{ headerShown: false }}>
      <Screen name="EnterPhoneNumber" component={EnterPhoneNumber} />
      <Screen name="EnterCodeSent" component={EnterCodeSent} />
      <Screen name="CreatePassword" component={CreatePassword} />
      <Screen name="LegalInfo" component={LegalInfo} />
      <Screen name="EnterAddress" component={EnterAddress} />
    </Navigator>
  );
};
