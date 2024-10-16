import { Text } from "react-native";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
export default function home(){
    const navigator=useNavigation();
    useEffect(()=>{
        navigator.setOptions({
            title:"Home",
            headerBackTitle:"Back"
        })
    },[])
    return (
        <>
        <Text>Home</Text>
        <Link href="/">Index</Link>
        <Link href="/about">About</Link>
        </>
    )
}