import { View, Text, StyleSheet, Image } from 'react-native'; 

import Ola from './ola';

// import logo from 'D:/TEMP/matheusaraujo/aula_pam/assets/002-1-react-native.png';
import logo from '../../assets/002-1-react-native.png'

import styles from './styles';

// const Saudacoes =(props) =>{
  // return(
    // <text style={styles.texto}>
      // Olá {props.name}!
    // </text>
  // );
// }

export default function Atividade_1 () { 

    return(     
        <View style={styles.container}>
            <Image source={logo} style={styles.imagem} />
            <Text style={styles.paragraph}>
                Atividade 1
            </Text>
            <Ola>Rivaldo</Ola>
            {/* <Ola nomePessoa={'Amarildo'}/> */}
            {/* <Ola nomePessoa={'Romario'}/> */}
            {/* <Ola nomePessoa={'Laurindo'}/> */}

           {/* <Saudacoes name='Mario' /> */}
           {/* <Saudacoes name='Maria' /> */}
           {/* <Saudacoes name='Bruna' /> */}
           {/* <Saudacoes name='Bruno' /> */}
        </View>
    );
}
