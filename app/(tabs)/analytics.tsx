import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

export default function analytics(){
    const navigator=useNavigation();
    useEffect(()=>{
        navigator.setOptions({
            title:"Home",
            headerBackTitle:"Back"
        })
    },[])
    return (
        <Text>Analytics</Text>
    )
}