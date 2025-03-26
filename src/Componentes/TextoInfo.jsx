
import { Text,View } from 'react-native';
import { Ionicons } from "react-native-vector-icons";
import { styles } from '../Estilo/styles';

export default function TextoInfo({mostrarMensagem}){

    return mostrarMensagem?
        <View style={styles.headerContainer}>
            <Ionicons
        name="chevron-up"
        size={40}
        color="white"
              />
        <Text style={styles.headerText}>Realize sua pesquisa na barra acima</Text>

          </View>
        :
        null
}
