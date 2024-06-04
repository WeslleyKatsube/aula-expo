import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       borderRadius: 20,
       justifyContent: 'center',
       backgroundColor: '#E2F2FD',
       padding: 18,
       alignItems: 'center',
    },  
    paragraph: {
        margin: 15,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1565C0',
    },
    imagem: {
        width: '100%',
        // height: '15%',
        resizeMode:'center',
    },
    texto: {
       fontSize: 15,
       textAlign: 'center',
       padding: 10,
       color: '#90CAF9',
    }
});

export default styles;