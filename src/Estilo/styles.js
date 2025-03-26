import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width} = Dimensions.get("window")
const IMAGE_WIDTH = width


export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cabecalho: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 50
    },
    textInput: {
      backgroundColor: "white",
      width: 300,
      borderRadius: 10,
      paddingLeft: 10
    },
    image: {
      width: IMAGE_WIDTH / 2.3,
      height: IMAGE_WIDTH / 2.3,
      margin:"3%"
    },
    headerContainer:{
      alignItems:"center",
      margin:10
    },
    headerText:{
      fontSize:16,
      alignItems:"center",
      color:"white"
    },

    container:{
        flex:1
   },
   imageContainer:{
    height:"50%",
    width:"100%"
   },




container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal:{
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  },
  btn:{
    width:100,
    height:50,
    borderRadius:10,
    backgroundColor:'white',
    margin:10,
    justifyContent:'center',
    alignItems:'center'
  },
  textBtn:{
    color:'black',
    fontSize:15,
    fontWeight:'bold'
  }







  });