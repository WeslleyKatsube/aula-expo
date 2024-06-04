import { Text } from 'react-native'; 

import styles from './styles';

export default function Ola ( {children}) {
    return <Text style = {styles.txtOla}> Olá {children}</Text>
}

// export default function Ola ( {nomePessoa}) {
    // return <Text style = {styles.txtOla}> Olá {nomePessoa}</Text>