import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, FlatList, Text, TouchableOpacity, Keyboard, View } from 'react-native';
import { Image } from 'expo-image';
import API_KEY from '../API_KEY';
import axios from 'axios';
import Cabecalho from '../Componentes/Cabecalho';
import TextoInfo from '../Componentes/TextoInfo';
import { styles } from '../Estilo/styles';
import Loading from '../Componentes/Loading';

export default function TelaResultado({ route, navigation }) {
  const escolha = route.params.escolha
  const link = `http://api.giphy.com/v1/${escolha}/search`

  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const [mostrarMensagem,setMostrarMensagem] = useState(true)
  const [isLoading,setIsLoading]=useState(false)
  const solicitarDados = async (text) => {
    Keyboard.dismiss();
    setIsLoading(true)
    try {
      
      const resultado = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text
        }
      })
      //console.log(resultado.data.data.images)
      
      setData(resultado.data.data)
      setMostrarMensagem(false)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
   
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
    >
      <Cabecalho
        text={text}
        setText={(valor) => setText(valor)}
        solicitarDados={solicitarDados}
        navigation={navigation}
      />

      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={
          <>
          <TextoInfo
           mostrarMensagem={mostrarMensagem}
           />
          <Loading isLoading={isLoading}/> 
           </>
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("TelaDetalhes",{item:item})}>

              <Image
                style={styles.image}
                source={{ uri: item.images.preview_gif.url }}
              />

            </TouchableOpacity>

          )
        }}
      />

    </ImageBackground>
  );
}

