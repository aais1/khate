import React, { useEffect, useState } from "react";
import { Text, View, Pressable, Dimensions } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [hasSeenLandingPage, setHasSeenLandingPage] = useState(false);
  const router = useRouter();
  const {width}=Dimensions.get('window');
  const navigator=useNavigation();


  useEffect(()=>{
    navigator.setOptions({
      headerShown:false
    })
  },[])

  // Check if user has already seen the landing page
  // useEffect(() => {
  //   const checkLandingPageSeen = async () => {
  //     const seen = await AsyncStorage.getItem("hasSeenLandingPage");
  //     if (seen) {
  //       setHasSeenLandingPage(true);
  //       router.push("/home"); // Redirect to home if landing page was seen
  //     }
  //   };
  //   checkLandingPageSeen();
  // }, []);

  // Mark landing page as seen and navigate to home
  const markAsSeen = async () => {
    await AsyncStorage.setItem("hasSeenLandingPage", "true");
    router.push("/home");
  };

  if (hasSeenLandingPage) return null;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#333",
        }}
      >
        Welcome to Khata App
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 40,
          textAlign: "center",
          color: "#555",
          paddingHorizontal: 50,
        }}
      >
        Easily manage your credit transactions and track all your accounts in one
        place. Let's get started!
      </Text>
      <Pressable
        style={{
          backgroundColor: "#000",
          width: width*0.75,
          padding: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#333",
          marginVertical: 5,
        }}
        onPress={markAsSeen}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </View>
  );
}
