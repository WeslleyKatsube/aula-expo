import { useState} from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';
import Botao from './botoes';

export default function Atividade_5() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('0.00');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }
    function subtrair() {
        setTotal(parseFloat(n1) - parseFloat(n2));
    }
    function multiplicar() {
        setTotal(parseFloat(n1) * parseFloat(n2));
    }
    function dividir() {
        setTotal(parseFloat(n1) / parseFloat(n2));
    }
    function zerar() {
        setN1(0);
        setN2(0);
        setTotal('0.00');
    }

    return(
        <View style={styles.container}>
            <Text style ={styles.titulo}> Atividade_5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1° número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                            isFocusN1 ?
                                {
                                    borderColor: '#C51162',
                                    outline: 'none',
                                }
                        :
                        {}
                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)}
                onChangeText={(num1) => setN1(num1)}
                value={n1}
                // keyboardType='numeric'

            />
            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º número </Text> 
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                            isFocusN2 ?
                                {
                                    borderColor: '#C51162',
                                    outline: 'none',
                                }
                        :
                        {}
                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)}
                onChangeText={(num2) => setN2(num2)}
                value={n2}
            />
            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                            isFocusTotal ?
                                {
                                    borderColor: '#C51162',
                                    outline: 'none',
                                }
                        :
                        {}
                    ]
                }
                onFocus={() => setIsFocusTotal(true)}
                onBlur={() => setIsFocusTotal(false)}
                editable={false}
                value={total ? parseFloat(total).toFixed(2) : ''}
            />
            <View style={styles.botoes}>
                <Botao sinal={'+'} operacao={soma} />
                <Botao sinal={'-'} operacao={subtrair} />
                <Botao sinal={'*'} operacao={multiplicar} />
                <Botao sinal={'/'} operacao={dividir} />
            </View>

            <Botao sinal={'Zerar'} operacao={zerar} />
          
        </View> 
    );
}
