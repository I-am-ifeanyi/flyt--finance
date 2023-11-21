import { createStackNavigator } from '@react-navigation/stack';

import { PhoneNumber } from '../../screens/onboarding/auth';
import { CountrySelect } from '../../screens/onboarding/auth';
import { Password } from '../../screens/onboarding/auth';

import { BottomSheetTransition } from '../../utils/navigation';

export const MainLoginRoute = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Password"
      screenOptions={{ headerShown: false }}>
      <Screen name="PhoneNumber" component={PhoneNumber} />
      <Screen
        options={BottomSheetTransition}
        name="CountrySelect"
        component={CountrySelect}
      />
      <Screen name="Password" component={Password} />
    </Navigator>
  );
};
