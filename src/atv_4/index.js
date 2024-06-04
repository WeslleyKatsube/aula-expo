import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade_4() {

    const [txtEscrito, setTxtEscrito] = useState('');
    const [txtSobrenome, setTxtSobrenome] = useState('');
    const [mensagem, setMensagem] = useState('Insira o nome e Sobrenome');

    function handleExibeTxt() {
        setMensagem(`${txtEscrito} ${txtSobrenome}`);
        setTxtEscrito('');
        setTxtSobrenome('');
    }

    function handleApagaTxt() {
        setMensagem('Insira o nome e sobrenome')     
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.texto}> {mensagem} </Text>
            
            <Text style={styles.nomeSobrenome}>Nome</Text>

            <TextInput 
            style={styles.input} 
            onChangeText={(entrada) => setTxtEscrito(entrada)}
            value={txtEscrito}
            />

            <Text style={styles.nomeSobrenome}>Sobrenome</Text>
           
             <TextInput
             style={styles.input}
            onChangeText={(entrada) => setTxtSobrenome(entrada)}
            value={txtSobrenome}      
             />

             <Pressable 
            style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao} onPress={() => handleExibeTxt() }    
            >
                Exibir Texto
            </Pressable>

            <Pressable 
            style={({ pressed }) => pressed ? [styles.botaoApg, styles.botaoPressApg] : styles.botaoApg} onPress={() => handleApagaTxt() }    
            >
                Voltar
            </Pressable>
        </View>
    )
}