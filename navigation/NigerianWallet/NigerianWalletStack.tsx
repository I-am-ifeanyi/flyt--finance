import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/NigerianWallet';
import { BottomSheetTransition } from '../../utils/navigation';

export const NigerianWalletStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
