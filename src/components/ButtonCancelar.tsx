import { StyleSheet, Text, TouchableOpacity } from "react-native"


  
export default function ButtonCancelar() {
    return (
        <TouchableOpacity style={styles.botao} >
        <Text style={styles.textoBotao}>Cancelar</Text>
    </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    botao: { 
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 60, 
        backgroundColor: '#484646', 
        marginHorizontal: 4, 
        marginTop: 90, 
        borderRadius: 8,
    },
    textoBotao: {
        color: '#ffffff'
    }
  })