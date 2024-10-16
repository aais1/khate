import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

export default function profile(){
    const navigator=useNavigation();
    useEffect(()=>{
        navigator.setOptions({
            title:"Profile",
        })
    },[])
    return (
        <Text>Profile</Text>
    )
}