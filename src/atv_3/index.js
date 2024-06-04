import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

export default function Atividade_3 () {

    const [numero, setNumero] = useState(0);

    function mensagem() {
        alert('Ola, Mundo!')
    };
    function incrementar() {
        setNumero(numero + 1);
    }; 
    function decrementar() {
        setNumero(numero - 1);
    }
    function zerar() {
        setNumero(numero - numero);
    }
 
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            
            <View style={styles.containerLadoLado}>
            
            <TouchableOpacity style={[styles.botao, styles.botaoContainer]} onPress={() => decrementar()}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>
            
            <Text style={styles.titulonum}>{numero}</Text>

            <TouchableOpacity style={[styles.botao, styles.botaoContainer]} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

            </View>

            
           
            <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                <Text style={styles.txtBotao}>Zerar</Text>

            </TouchableOpacity>
            
        </View>
    );
}