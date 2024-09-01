import { View,Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default function ImagePost() {
    return (
      <View style={styles.imageContainer}>
        <Text style={styles.imageTitle}>Imagem</Text>
        <View style={styles.adicionaFoto}>
            <MaterialIcons name='add' size={40} color={'#484646'} style={{ marginRight: 8 }} />
            <Text style={styles.imageTitle}>Adicionar imagem</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
      marginTop: 12,
      paddingHorizontal: 8,
    },
    adicionaFoto:{
      marginTop: 12,
      paddingHorizontal: 8,
      alignItems: 'center',
      backgroundColor: '#D9D9D9',
      padding: 20,
      borderRadius: 8
    },
    imageTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#484646',
      paddingHorizontal: 4
  
    },
  })