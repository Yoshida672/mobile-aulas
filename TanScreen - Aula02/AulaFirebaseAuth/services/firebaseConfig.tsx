import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Irá pegar o getReactNativePersistence sem a necessidade de tipagem
const {getReactNativePersistence} = require("firebase/auth") as any

const firebaseConfig = {
  apiKey: "AIzaSyCvUG3wJpaTAyFxq4FbRTPcmrjOwTTJhv4",
  authDomain: "projetoaulafirebase-633eb.firebaseapp.com",
  projectId: "projetoaulafirebase-633eb",
  storageBucket: "projetoaulafirebase-633eb.firebasestorage.app",
  messagingSenderId: "574896684216",
  appId: "1:574896684216:web:666ef05360253b36b6c84d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(AsyncStorage)
})

export {auth}