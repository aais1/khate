import { useNavigation } from "expo-router"
import { useEffect } from "react";
import { Text } from "react-native"

export default function about(){
    const navigator=useNavigation();
    useEffect(()=>{
        navigator.setOptions({
            title:"About",
            headerBackTitle:"Back"
        })
    },[])
    return (
        <>
            <Text>About</Text>
        </>
    )
}