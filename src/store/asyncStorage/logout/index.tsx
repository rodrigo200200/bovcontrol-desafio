import AsyncStorage from "@react-native-async-storage/async-storage";

const logout = async () => {    
    try {
        AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => {
            console.log("AsyncStorage totalmente limpo")
            return true
        });
    }catch(err){
        console.log("ERRO AO LIMPAR", err)
        return false
    }
}

export const index = {
    logout
}
export default index;