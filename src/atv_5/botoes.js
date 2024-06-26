import { Pressable, Text } from 'react-native';

import styles from './styles';

export default function Botao({sinal, operacao}) {
    return (
        <Pressable
            onPress={() => operacao()}
            style={
                ({ pressed }) => pressed ?
                    [styles.button, styles.buttonTouch, sinal === 'Zerar' ? styles.width100 : '']
                    :
                    [styles.button, sinal === 'Zerar' ? styles.width100 : '']
            }     
        >
            <Text style={styles.textButton}>{sinal}</Text>
        </Pressable>
    );
}