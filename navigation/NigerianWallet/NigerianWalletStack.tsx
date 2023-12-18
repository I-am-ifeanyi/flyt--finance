import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/NigerianWallet';
import { VerifyIdentity } from '../../screens/NigerianWallet';
import { EnterBVN } from '../../screens/NigerianWallet';
import { VerifyWithID } from '../../screens/NigerianWallet';
import { AddAmount } from '../../screens/NigerianWallet';
import { AddCard } from '../../screens/NigerianWallet';
import { ResultScreen } from '../../screens/NigerianWallet';
import { BottomSheetTransition } from '../../utils/navigation';

export const HomeTab = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
export const NigerianWalletStack = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="HomeRoute"
      screenOptions={{ headerShown: false }}>
      <Screen name="HomeTab" component={HomeTab} />
      <Screen name="VerifyIdentity" component={VerifyIdentity} />
      <Screen name="EnterBVN" component={EnterBVN} />
      <Screen name="VerifyWithID" component={VerifyWithID} />
      <Screen
        name="AddAmount"
        component={AddAmount}
        options={BottomSheetTransition}
      />
      <Screen name="AddCard" component={AddCard} />
      <Screen name="ResultScreen" component={ResultScreen} />
    </Navigator>
  );
};
