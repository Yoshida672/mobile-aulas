import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, TouchableOpacity, FlatList } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Style } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp(){

    const[nameObject, setNameObject] = useState("")
    const[priceObject, setPriceObject] = useState()
    const[data,setData] = useState([])
    async function Save() {
        let objects = []

        if(await AsyncStorage.getItem("OBJECTS")!=null){
             objects = JSON.parse(await AsyncStorage.getItem("OBJECTS"))
        }
        objects.push({name:nameObject,price:priceObject})

        await AsyncStorage.setItem("OBJECTS",JSON.stringify(objects))
        // Salvando dados no async storage
    
        alert("PRODUTO CADASTRADO")
        GetData()
    }

    async function GetData(){
        const p = await AsyncStorage.getItem("OBJECTS")
        setData(JSON.parse(p))
        console.log(p) 
    }


    return (
    <View  >
        <Text>Cadastro</Text>
        <TextInput
            placeholder='Nome do produto'
            style={Style.input}
            value={nameObject}
            onChangeText={(value)=>setNameObject(value)}
        />
        <TextInputMask
            placeholder='Preço do produto'
            style={Style.input}
            value={priceObject}
            onChangeText={(value)=>setPriceObject(value)}
            type='money'
        />
        <TouchableOpacity 
        style={Style.btn}
        onPress={Save}
        >
            <Text>Cadastrar</Text>
        </TouchableOpacity>
    
    <FlatList
    data={data}
    renderItem={({item,index})=>{
        return(
        <View style={Style.listarFlat}>
            <Text>Nome: {item.name} - R${item.price}</Text>
        </View>        
        )
    }}


    />
    </View>
    );   
}
