import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import Button from "../../components/Button";

import Logo from "../../assets/uaipelota.png";

export default function SoccerList() {
   const navigation = useNavigation();

   return (
      <>
         <ImageBackground
            style={styles.container}
            source={{ uri: "https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg" }}
            resizeMode="cover">
            <Image source={Logo} style={{ height: 40, position: "absolute", top: 55 }} />
         </ImageBackground>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#14A085",
   },
   title: {
      color: "#FFF",
      fontSize: 18,
      marginVertical: 20,
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
   },
   subtitle: {
      color: "#FFF",
      fontSize: 18,
      marginTop: 50,
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
   },
   description: {
      color: "#FFF",
      fontSize: 12,
      textAlign: "center",
      marginTop: 25,
      textTransform: "uppercase",
   },
   addButton: {
      width: 250,
      borderRadius: 25,
      backgroundColor: "#14A085",
      alignItems: "center",
      justifyContent: "center",
   },
   button: {
      width: "75%",
      position: "absolute",
      bottom: 30,
      alignSelf: "center",
      backgroundColor: "#800202",
   },
   area: {
      marginTop: 200,
      maxHeight: "60%",
      width: "100%",
      padding: 30,
   },
});
