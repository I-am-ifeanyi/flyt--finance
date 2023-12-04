import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/NigerianWallet';
import { VerifyIdentity } from '../../screens/NigerianWallet';
import { EnterBVN } from '../../screens/NigerianWallet';
import { VerifyWithID } from '../../screens/NigerianWallet';
import { BottomSheetTransition } from '../../utils/navigation';
import Tabs from '../Tabs';

export const NigerianWalletStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="VerifyIdentity" component={VerifyIdentity} />
      <Screen name="EnterBVN" component={EnterBVN} />
      <Screen name="VerifyWithID" component={VerifyWithID} />
      <Screen name="Tabs" component={Tabs} />
    </Navigator>
  );
};
