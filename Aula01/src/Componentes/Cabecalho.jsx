import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { styles } from "../Estilo/styles";
export default function Cabecalho({
  navigation,
  text,
  setText,
  solicitarDados,
  mostrarMensagem,
  setMostrarMensagem
}) {
  return (
    <View style={styles.cabecalho}>
      <Ionicons
        name="chevron-back"
        size={40}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Digite sua pesquisa"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(value) => setText(value)}
        onSubmitEditing={()=>solicitarDados(text)}
        


      />
      <Ionicons
        name="search"
        size={40}
        color="white"
        onPress={() => solicitarDados(text)}
      />
    </View>
  );
}