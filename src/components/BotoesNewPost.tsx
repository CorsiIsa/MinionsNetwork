import {StyleSheet, View } from "react-native";
import ButtonSalvar from "./ButtonSalvar";
import ButtonCancelar from "./ButtonCancelar";

export default function BotoesNewPost() {
    return (
        <View style={styles.container}>
          <ButtonSalvar/>
          <ButtonCancelar/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        padding: 10
    }
  })