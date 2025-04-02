import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderWidth: 3,
        width:300,
        borderRadius: 5,
        marginTop: 10,
    },
    btn:{
        backgroundColor: "blue",
        color: "white",
        height: 50,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 10
    },
    listarFlat:{
        width:300,
        borderWidth:1,
        borderRadius:15,
        width:80,
        textAlign:'center',
        justifyContent:'center',
        marginVertical:3
    }
});