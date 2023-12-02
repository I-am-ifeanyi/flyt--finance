import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/NigerianWallet';
import { BottomSheetTransition } from '../../utils/navigation';
import Tabs from '../Tabs';

export const NigerianWalletStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Tabs" component={Tabs} />
    </Navigator>
  );
};
