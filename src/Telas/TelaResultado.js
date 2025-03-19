import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, TextInput } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'
export default function TelaResultado({route,navigation}) {
  const escolha = route.params.escolha
  const link = `api.giphy.com/v1/${escolha}/search`
const[textPesq,setTextPesq]=useState("");
  
return (
    <ImageBackground
     source={require("../../assets/BG.png") }
     style={styles.container}
     >
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Ionicons name="chevron-back" size={40} colors="white" onPress={()=>navigation.goBack()}/>
        <TextInput 
        placeholder='Digite sua pesquisa'
        autoCapitalize='none'
        autoCorrect={false}
        value={textPesq}
        onChangeText={(value)=>setTextPesq(value)}
        />
        <Ionicons name="search" size={40} color="white"/>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
