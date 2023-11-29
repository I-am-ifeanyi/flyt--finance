import { createStackNavigator } from '@react-navigation/stack';

import { EnterPhoneNumber } from '../../screens/onboarding/auth/signUp';
import { EnterCodeSent } from '../../screens/onboarding/auth/signUp';
import { CreatePassword } from '../../screens/onboarding/auth/signUp/CreatePassword';
import { LegalInfo } from '../../screens/onboarding/auth/signUp';
import { EnterAddress } from '../../screens/onboarding/auth/signUp';
import { ChooseUserName } from '../../screens/onboarding/auth/signUp';
import { EnterEmail } from '../../screens/onboarding/auth/signUp';
import { EmailConfirmation } from '../../screens/onboarding/auth/signUp';
import { WelcomePrompt } from '../../screens/onboarding/auth/signUp';
import { TurnNotification } from '../../screens/onboarding/auth/signUp';

export const SignUpNavigationStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="EnterPhoneNumber"
      screenOptions={{ headerShown: false }}>
      <Screen name="EnterPhoneNumber" component={EnterPhoneNumber} />
      <Screen name="EnterCodeSent" component={EnterCodeSent} />
      <Screen name="CreatePassword" component={CreatePassword} />
      <Screen name="LegalInfo" component={LegalInfo} />
      <Screen name="EnterAddress" component={EnterAddress} />
      <Screen name="ChooseUserName" component={ChooseUserName} />
      <Screen name="EnterEmail" component={EnterEmail} />
      <Screen name="EmailConfirmation" component={EmailConfirmation} />
      <Screen name="WelcomePrompt" component={WelcomePrompt} />
      <Screen name="TurnNotification" component={TurnNotification} />
    </Navigator>
  );
};
