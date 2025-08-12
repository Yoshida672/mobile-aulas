import { ActivityIndicator, View } from "react-native";
export default loading = ({isLoading})=>{
    return isLoading?
        <ActivityIndicator
        color={"white"}
        size={40}
        style={{margin:20}}
        />
    :
    null
}