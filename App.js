import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/Telas/TelaInicial";
import TelaResultado from "./src/Telas/TelaResultado";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown:true}}/>
        <Stack.Screen name="TelaResultado" component={TelaResultado} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
