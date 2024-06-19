import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Exemplo_2 () { 

    return(
        <View style={styles.container}>
            <Text style={styles.mensagem}>
                Hello React Native
            </Text>
        </View>
    );
}
