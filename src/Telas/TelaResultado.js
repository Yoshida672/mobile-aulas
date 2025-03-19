import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, TextInput, SafeAreaView, FlatList } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'
import API_KEY from '../API_KEY';
import axios from 'axios';

export default function TelaResultado({route,navigation}) {
  const escolha = route.params.escolha
  const link = `api.giphy.com/v1/${escolha}/search`
const[textPesq,setTextPesq]=useState("");
const[dados,setDados]=useState([]);
  
const requestData = async(textPesq)=>{
  try{
const resultado = await axios.get(link,{
  params:{
    api_key:API_KEY,
    q:textPesq,
    lang:"pt"
  }
})
setDados(resultado.data.data)
  }
  catch(err){
    console.log(err)
  }
}
return (
    <ImageBackground
     source={require("../../assets/BG.png") }
     style={styles.container}
     >
      <SafeAreaView style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Ionicons name="chevron-back" size={40} colors="white" onPress={()=>navigation.goBack()}/>
        <TextInput 
        placeholder='Digite sua pesquisa'
        autoCapitalize='none'
        autoCorrect={false}
        value={textPesq}
        onChangeText={(value)=>setTextPesq(value)}
        />
        <Ionicons name="search" size={40} color="white" onPress={()=>requestData(textPesq)}/>
      </SafeAreaView>
        
        <FlatList
        data={dados}
        renderItem={({item})=>{
          return(
            <Image
            style={styles.image}
            source={{uri:item.image.preview_gif.url}}/>
          )
        }}/>
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
  input:{
    flex:1,
    ImageBackground:'white',
    borderRadius:10,
    paddingLeft:10
  },
  image:{
    width:250,
    height:250
 }
});
