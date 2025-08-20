import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword, reauthenticateWithCredential,updatePassword } from 'firebase/auth';
import {auth} from '../services/firebaseConfig'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EmailAuthProvider } from 'firebase/auth/web-extension';

export default function AlterarSenhaScreen() {
  // Estados para armazenar os valores digitados
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha,setNovaSenha] = useState('');
  const [confirmaSenha,setConfirmaSenha] = useState('');

  const router = useRouter()//Hook para navegação

  // Função para simular o envio do formulário
  const handlerAlterarSenha  =async () => {
    if (!novaSenha || !confirmaSenha || !senhaAtual) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    if(novaSenha!=senhaAtual){
    Alert.alert('Atenção', 'As Senhas não coincidem!');
    return; 
    }
    if(novaSenha.length<6){
        Alert.alert("Erro","Nova senha precisa ter mais de 6 caracteres")
    }
    try{
        const user = auth.currentUser
        if(!user||!user.email){
            Alert.alert("Erro","Nenhum usuário logado")
            return
        }

        //Cria as credenciais para reautenthicar o usuario
        const credential = EmailAuthProvider.credential(user.email,senhaAtual)
        await reauthenticateWithCredential(user,credential)
        await updatePassword(user,novaSenha)
        Alert.alert("Sucesso","Senha alterada com sucesso")
        router.push("HomeScreen")
    }
    catch(error){
        console.log("Erro ao atualizar senha")
        Alert.alert("Erro","Senha não alterada")
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alterar Senha</Text>

      {/* Campo Senha atual */}
      <TextInput
        style={styles.input}
        placeholder="Digite a Senha Atual"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senhaAtual}
        onChangeText={setSenhaAtual}
      />

      {/* Campo Nova Senha */}
      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={novaSenha}
        onChangeText={setNovaSenha}
      />

      {/* Campo Confirmar Senha */}
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmaSenha}
        onChangeText={setConfirmaSenha}
      />

      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={handlerAlterarSenha}>
        <Text style={styles.textoBotao}>Alterar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  botao: {
    backgroundColor: '#00B37E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
