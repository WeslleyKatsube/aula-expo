import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Atividade_1 from './src/atv_1'; 
// import Atividade_3 from './src/atv_3'; 
// import Atividade_4 from './src/atv_4';
// import Atividade_5 from './src/atv_5';

// import Mensagem from './src/ex_2';
// import Exemplo_3 from './src/ex_3'
// import Exemplo_4 from './src/ex_4';
// import Exemplo_5 from './src/ex_5';
import Exemplo_6 from './src/ex_6';

export default function App() {
  return (
    <View style={styles.container}>
      < Exemplo_6 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey' , //#b71c1c
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
   
  },
});
