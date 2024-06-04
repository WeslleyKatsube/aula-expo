import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#ffcdd2',
        padding: 8,
        borderRadius: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight:'bold',
        color: '#b71c1c',
        margin: 20,
        marginBottom: 40,

    },
    texto: {
        fontSize: 30,
        marginVertical: 10,
        padding: 5,
        color: '#b71c1c'
    },
    nomeSobrenome: {
        width: 450 ,
        color: '#b71c1c',
        fontWeight: 'bold'
    },
    // sobrenome: {
    //    width: 450,
    //    color: '#b71c1c',
    //    fontWeight: 'bold'
    // },
    input: {          
        fontSize: 25,
        width: 450,
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#b71c1c',
        borderRadius: 10,
        margin: 3,
        marginBottom: 20,
        height: 45
    },
    botao: {
        width: 250,
        padding: 16,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#b71c1c',
        marginVertical: 10,
    },
    botaoPress: {
        backgroundColor: '#fff',

    },
    txtBotao: {
        color: '#ff2cdd2',
        fontSize: 20,
    },
    txtBotaoPress: {
        color: '#b71c1c',

    },
botaoApg: {
    width: 250,
    padding: 16,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    
},
botaoPressApg: {
    backgroundColor: '#b71c1c'
}
})

export default styles;