import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from '../Estilo/styles';
export default function TelaInicial({navigation}) {
  
  return (
    <ImageBackground
      source={require('../../assets/HomePage.png')}
      style={styles.container}
    >
      <Text style={styles.textoPrincipal}>Pequisar por...</Text>

      <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn} 
              onPress={()=>navigation.navigate("TelaResultado",{escolha:'gifs'})}
          >
            <Text style={styles.textBtn}>Gifs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}
              onPress={()=>navigation.navigate("TelaResultado",{escolha:'stickers'})}
          >
            <Text style={styles.textBtn}>Stickers</Text>
          </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

