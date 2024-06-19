import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Navegacaostack from './src/navegacao/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <Navegacaostack/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey' , //#b71c1c
    padding: 18,
   
  },
});
