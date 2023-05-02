import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import Button from "../../components/Button";
import { AppContext } from "../../contexts/AppContext";

import Logo from "../../assets/uaipelota.png";

export default function Rules() {
   const navigation = useNavigation();
   const { amountOfPlayers, setAmountOfPlayers } = useContext(AppContext);

   return (
      <ImageBackground
         style={styles.container}
         //source={Background}
         source={{ uri: "https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg" }}
         resizeMode="cover">
         <Image source={Logo} style={{ height: 40, position: "absolute", top: 55 }} />
         <View style={styles.content}>
            <Text style={styles.label}>Nº de jogadores</Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 50, alignItems: "center", justifyContent: "center" }}>
               <TouchableOpacity style={[styles.card, amountOfPlayers === 10 && styles.active]} onPress={() => setAmountOfPlayers(10)}>
                  <Text style={styles.txtCard}>10</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.card, amountOfPlayers === 15 && styles.active]} onPress={() => setAmountOfPlayers(15)}>
                  <Text style={styles.txtCard}>15</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.card, amountOfPlayers === 20 && styles.active]} onPress={() => setAmountOfPlayers(20)}>
                  <Text style={styles.txtCard}>20</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.card, amountOfPlayers === 25 && styles.active]} onPress={() => setAmountOfPlayers(25)}>
                  <Text style={styles.txtCard}>25</Text>
               </TouchableOpacity>
            </View>

            <Button onPress={() => navigation.goBack()} label="VOLTAR" style={styles.button} />
         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   content: {
      flex: 1,
      marginTop: 200,
      alignItems: "center",
      justifyContent: "center",
   },
   label: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: 0,
   },
   card: {
      backgroundColor: "#F1F3F4",
      width: 70,
      height: 70,
      borderRadius: 10,
      margin: 20,
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
   },
   active: {
      backgroundColor: "#F1F3F4",
      borderColor: "#800202",
      borderWidth: 6,
      width: 70,
      height: 70,
      borderRadius: 10,
      margin: 20,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
   },
   txtCard: {
      color: "#333",
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: 0,
   },
   button: {
      width: "75%",
      position: "absolute",
      bottom: 30,
      alignSelf: "center",
      backgroundColor: "#800202",
   },
});
