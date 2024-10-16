import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

export default function analytics(){
    const navigator=useNavigation();
    useEffect(()=>{
        navigator.setOptions({
            title:"Analytics",
        })
    },[])
    return (
        <Text>Analytics</Text>
    )
}