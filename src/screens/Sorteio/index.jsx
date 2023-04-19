import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, Dimensions, Alert } from "react-native";
import Button from "../../components/Button";
import Logo from "../../assets/uaipelota.png";
import StarRating from "react-native-star-rating";

const { width, height } = Dimensions.get("window");

export default function Sorteio() {
   const navigation = useNavigation();
   const [teams, setTeams] = useState([]);
   const [ratings, setRatings] = useState([]);

   const players = [
      {
         id: "1",
         name: "Luva de Pedreiro",
         position: "Goleiro",
         rating: 4.5,
      },
      {
         id: "2",
         name: "PH",
         position: "Fixo",
         rating: 4,
      },
      {
         id: "3",
         name: "Bruno",
         position: "Ala",
         rating: 3,
      },
      {
         id: "4",
         name: "Matheus",
         position: "Ala",
         rating: 2.5,
      },
      {
         id: "5",
         name: "Cego",
         position: "Pivô",
         rating: 3.5,
      },
      {
         id: "6",
         name: "Messi",
         position: "Ala",
         rating: 5,
      },
      {
         id: "7",
         name: "Cristiano Ronaldo",
         position: "Pivô",
         rating: 5,
      },
      {
         id: "8",
         name: "Jailson Will Smith",
         position: "Fixo",
         rating: 1.5,
      },
      {
         id: "9",
         name: "Pedro",
         position: "Ala",
         rating: 2,
      },
      {
         id: "10",
         name: "Sérgio Ranca Toco",
         position: "Fixo",
         rating: 1,
      },
      {
         id: "11",
         name: "Biro Biro",
         position: "Pivô",
         rating: 4,
      },
      {
         id: "12",
         name: "São Marcos",
         position: "Goleiro",
         rating: 5,
      },
      {
         id: "13",
         name: "Deyvinho",
         position: "Pivô",
         rating: 4,
      },
      {
         id: "14",
         name: "Scarpinha",
         position: "Ala",
         rating: 4.5,
      },
      {
         id: "15",
         name: "Dudu",
         position: "Ala",
         rating: 4.5,
      },
   ];

   //players.sort((a, b) => b.rating - a.rating);

   function shuffleArray(array) {
      // Implementa algoritmo de Fisher-Yates para embaralhar um array
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
   }

   function formarTimes(players) {
      const numJogadores = players.length;
      const numTimes = Math.floor(numJogadores / 5);
      const jogadoresPorTime = 5;

      // Calcula a média de rating de todos os jogadores
      const somaRating = players.reduce((total, jogador) => total + jogador.rating, 0);
      const mediaRating = somaRating / numJogadores;

      // Ordena o array de jogadores por rating
      const jogadoresOrdenados = players.sort((a, b) => a.rating - b.rating);

      // Cria um array de índices de jogadores
      const indicesJogadores = jogadoresOrdenados.map((jogador, index) => index);

      // Embaralha o array de índices de jogadores
      const indicesJogadoresEmbaralhados = shuffleArray(indicesJogadores);

      const times = [];
      const mediasRatingTimes = [];

      for (let i = 0; i < numTimes; i++) {
         const time = [];

         for (let j = 0; j < jogadoresPorTime; j++) {
            const jogadorIndex = indicesJogadoresEmbaralhados[i * jogadoresPorTime + j];
            const jogador = jogadoresOrdenados[jogadorIndex];
            time.push(jogador);
         }

         // Calcula a média de rating do time
         const somaRatingTime = time.reduce((total, jogador) => total + jogador.rating, 0);
         const mediaRatingTime = somaRatingTime / jogadoresPorTime;

         // Se a diferença entre a média do time e a média geral for maior que 0.5, recria o time
         if (Math.abs(mediaRatingTime - mediaRating) > 0.5) {
            return formarTimes(players);
         }

         times.push(time);
         mediasRatingTimes.push(mediaRatingTime);
      }

      setRatings(mediasRatingTimes);
      return times;
   }

   function sortear() {
      const teamsSorted = formarTimes(players);
      console.log("teamsSorted", teamsSorted);
      setTeams(teamsSorted);

      console.log("ratings", ratings);
   }

   return (
      <ImageBackground
         style={styles.container}
         source={{ uri: "https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg" }}
         resizeMode="cover">
         {/* <Text style={styles.title}>UAIPELOTA</Text> */}
         <Image source={Logo} style={{ height: 40, marginTop: 55 }} />

         <Button onPress={sortear} label="SORTEAR" style={{ width: "75%", marginTop: 220, alignSelf: "center", backgroundColor: "green" }} />

         <View style={styles.teams}>
            {teams.map((team, index) => {
               return (
                  <View style={styles.team} key={index}>
                     <Text style={styles.teamTitle}>
                        Time {index + 1} - Nível: {ratings[index].toFixed(1)}
                     </Text>
                     {team.map((player, idx) => {
                        return (
                           <View style={styles.player} key={idx}>
                              <Text style={styles.playerName}>{player.name}</Text>
                              <StarRating disabled={true} maxStars={5} rating={player.rating} starSize={8} fullStarColor={"#F2DB2E"} />
                           </View>
                        );
                     })}
                  </View>
               );
            })}
         </View>

         <Button
            onPress={() => navigation.goBack()}
            label="VOLTAR"
            style={{ width: "75%", position: "absolute", bottom: 50, alignSelf: "center", backgroundColor: "#800202" }}
         />
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
   },
   title: {
      marginTop: 180,
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold",
      padding: 20,
   },
   subtitle: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      marginVertical: 25,
      padding: 20,
      marginBottom: 20,
   },
   teams: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      margin: 20,
   },
   team: {
      width: "45%",
      marginBottom: 10,
   },
   teamTitle: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      marginVertical: 10,
   },
   player: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 2,
   },
   playerName: {
      color: "#fff",
      fontSize: 14,
      marginVertical: 2,
      marginRight: 4,
   },
   playerRating: {
      color: "#fff",
      fontSize: 14,
   },
   input: {
      backgroundColor: "#fff",
      width: "80%",
      height: 40,
      borderRadius: 20,
      fontWeight: "bold",
      padding: 12,
      alignSelf: "center",
   },
   label: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 12,
      marginTop: 20,
      marginLeft: 45,
      fontWeight: "bold",
      textTransform: "uppercase",
   },
});
