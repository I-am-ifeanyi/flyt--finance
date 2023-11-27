import { createStackNavigator } from '@react-navigation/stack';

import { PhoneNumber } from '../../screens/onboarding/auth';
import { CountrySelect } from '../../screens/onboarding/auth';
import { Password } from '../../screens/onboarding/auth';
import { PasswordLandingScreen } from '../../screens/onboarding/auth/forgotPassword';
import { CreateNewPassword } from '../../screens/onboarding/auth/forgotPassword/CreateNewPassword';
import { VerifyNewPassword } from '../../screens/onboarding/auth/forgotPassword';
import { PinLandingScreen } from '../../screens/onboarding/auth/forgotPin/PinLandingScreen';
import { CreateNewPin } from '../../screens/onboarding/auth/forgotPin';
import { VerifyNewPin } from '../../screens/onboarding/auth/forgotPin';
import { BottomSheetTransition } from '../../utils/navigation';

export const MainLoginRoute = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="PhoneNumber"
      screenOptions={{ headerShown: false }}>
      <Screen name="PhoneNumber" component={PhoneNumber} />
      <Screen
        options={BottomSheetTransition}
        name="CountrySelect"
        component={CountrySelect}
      />
      <Screen name="Password" component={Password} />
      <Screen name="PasswordLandingScreen" component={PasswordLandingScreen} />
      <Screen
        options={BottomSheetTransition}
        name="CreateNewPassword"
        component={CreateNewPassword}
      />
      <Screen name="VerifyNewPassword" component={VerifyNewPassword} />
      <Screen name="PinLandingScreen" component={PinLandingScreen} />
      <Screen
        options={BottomSheetTransition}
        name="CreateNewPin"
        component={CreateNewPin}
      />
      <Screen name="VerifyNewPin" component={VerifyNewPin} />
    </Navigator>
  );
};
