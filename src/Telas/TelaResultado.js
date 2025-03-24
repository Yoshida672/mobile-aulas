import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, FlatList, Dimensions, TouchableOpacity, Keyboard } from 'react-native';
import { Image } from 'expo-image';
import API_KEY from '../API_KEY';
import axios from 'axios';
import Cabecalho from '../Componentes/Cabecalho';

const { width, height } = Dimensions.get("window")
const IMAGE_WIDTH = width
const IMAGE_HEIGHT = height

export default function TelaResultado({ route, navigation }) {
  const escolha = route.params.escolha
  const link = `http://api.giphy.com/v1/${escolha}/search`

  const [text, setText] = useState('')
  const [data, setData] = useState([])

  const solicitarDados = async (text) => {
    Keyboard.dismiss();
    try {

      const resultado = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text
        }
      })
      //console.log(resultado.data.data.images)

      setData(resultado.data.data)
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
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("TelaDetalhes")}>

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

const styles = StyleSheet.create({
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
    width: IMAGE_WIDTH / 2,
    height: IMAGE_WIDTH / 2
  }
});