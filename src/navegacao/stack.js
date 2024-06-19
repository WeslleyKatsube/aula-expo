import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import exemplos from '../exemplos';
import Exemplo_2 from '../ex_2';
import Exemplo_3 from '../ex_3';
import Exemplo_4 from '../ex_4';
import Exemplo_5 from '../ex_5';


const Stack = createNativeStackNavigator();

function Navegacaostack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="exemplos" component={exemplos} />
        <Stack.Screen name="ex2" component={Exemplo_2} />
        <Stack.Screen name="ex3" component={Exemplo_3} />
        <Stack.Screen name="ex4" component={Exemplo_4} />
        <Stack.Screen name="ex5" component={Exemplo_5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacaostack;