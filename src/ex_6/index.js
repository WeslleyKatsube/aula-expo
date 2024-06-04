import { View, Text } from 'react-native';

import styles from './styles';
import Input from './input';
import Botao from './botao';

export default function Exemplo_6 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso'  />
                <Input placeholder='Altura'  />
            </View>

            <Botao>Calcular</Botao>
        </View>

    )
}
