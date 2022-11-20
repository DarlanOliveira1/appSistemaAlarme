import { NavigationContainer }        from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home                           from './src/pages/login'
import Alarme                         from './src/pages/alarme'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Home} />
      <Stack.Screen name="Alarme" component={Alarme} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}