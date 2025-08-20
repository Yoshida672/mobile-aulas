import { StyleSheet,View,Text, Pressable} from 'react-native';
import {AntDesign,MaterialIcons} from '@expo/vector-icons'

export default function ItemLoja(){
    return( 
    <View style={style.container}>
        <Pressable>
        <AntDesign name="checkcircleo" color='black' size={24}/>
        </Pressable>
        <Text style={style.title}>Mouse Gamer</Text>
        <Pressable>
            <MaterialIcons name='delete' color='black' size={24}/>
        </Pressable>
    </View>
)
}
const style = StyleSheet.create({
container:{
    flexDirection:'row',
    backgroundColor:'lightgray',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center',
    alignSelf:'center',
    width:'90%',
    marginTop:10,
    borderRadius:10
},
title:{
    flex:1,
    marginLeft:10,
    fontSize:17,
    fontWeight:'bold',
}
})