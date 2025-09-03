import { Alert, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { deleteUser } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import ItemLoja from "../components/ItemLoja"
export default function HomeScreen(){
    const router = useRouter();

    const realizarLogout = async()=>{
        await AsyncStorage.removeItem('@user');
        router.push("/")
    }
    
    const excluirConta =()=>{
       Alert.alert("EXCLUIR CONTA","Tem Certeza que deseja excluir essa conta? Essa ação não poderá ser desfeita",
        [
            {text:"Cancelar",style:'cancel'},
            {text:"Excluir",style:'destructive',
            onPress:async()=>{
                try{
                    const user =auth.currentUser
                    if(user){
                        await deleteUser(user)
                        await AsyncStorage.removeItem('@user')
                        Alert.alert("Conta Excluida","Sua conta foi excluida com sucesso")
                        router.replace('/')
                    }
                    else{
                        Alert.alert("Erro","Nenhum usuario logado")
                    }
                }
                catch(error){
                    console.log("Erro ao excluir conta")
                    Alert.alert("Erro","Não foi possivel excluir a conta")
                }
            }
        }
        ],{cancelable:true}
       )
    }

  


    return (
        <SafeAreaView>
            <Text>Seja bem-vindo - Você está Logado!!</Text>
            <Button
                title="Sair da conta"
                onPress={realizarLogout}
            />
            <Button
                title="Excluir conta"
                onPress={excluirConta}
                color={'red'}
            />
            <Button
                title="Alterar senha"
                onPress={() => router.push('AlterarSenhaScreen')}
            />
            <ItemLoja />
            <ItemLoja />
            <ItemLoja />
            <TextInput
            style={styles.input} 
            placeholder="Digite o nome do produto" 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    input:{
        backgroundColor:'lightgray',
        marginTop:10,
        alignSelf:'center',
        width:'90%'
    }
})