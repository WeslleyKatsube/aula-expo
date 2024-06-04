import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fafafa',
       width: '100%',
       borderRadius: 20, 
       alignItems: 'center',
       padding: 20,
       
    
},

containerLadoLado: {
    // borderWidth: 2, 
    width: '80%',
    // height: 100,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 20,

},
botaoContainer: {
    width: '30%',
    marginHorizontal: 0,

},

titulo: {
    fontSize: 30,
    fontWeight: 'bold',
},

titulonum: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,

},

botao: {
    alignItems: 'center',
    width: '80%',
    padding: 10,
    margin: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',

    
},
txtBotao: {
    fontSize: 25,
    color: '#fafafa'
    
},


});

export default styles;