import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import SignUp from './src/components/SignUp';
import { Style } from './src/components/styles';
export default function App() {
  return (
    <View style={Style.container}>
      <SignUp/>
  
    </View>
  );
}