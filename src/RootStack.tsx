import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './home';
import { Profile } from './profile';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
