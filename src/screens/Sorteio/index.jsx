import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, ScrollView, Alert } from 'react-native'
import Button from '../../components/Button';
import Logo from '../../assets/uaipelota.png';

export default function Sorteio() {
  const navigation = useNavigation();
  const [teams, setTeams] = useState([]);

  const players = [
    {
      id: '1',
      name: 'Luva de Pedreiro',
      position: 'Goleiro',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'PH',
      position: 'Fixo',
      rating: 4,
    },
    {
      id: '3',
      name: 'Bruno',
      position: 'Ala',
      rating: 3,
    },
    {
      id: '4',
      name: 'Matheus',
      position: 'Ala',
      rating: 2.5,
    },
    {
      id: '5',
      name: 'Cego',
      position: 'Pivô',
      rating: 3.5,
    },
    {
      id: '6',
      name: 'Messi',
      position: 'Ala',
      rating: 5,
    },
    {
      id: '7',
      name: 'Cristiano Ronaldo',
      position: 'Pivô',
      rating: 5,
    },
    {
      id: '8',
      name: 'Jailson Will Smith',
      position: 'Fixo',
      rating: 1.5,
    },
    {
      id: '9',
      name: 'Pedro',
      position: 'Ala',
      rating: 2,
    },
    {
      id: '10',
      name: 'Sérgio Ranca Toco',
      position: 'Fixo',
      rating: 1,
    }
  ]

  function sortear() {
    players.sort((a, b) => b.rating - a.rating);
    const goleiros = players.filter(player => player.position === 'Goleiro');
    const fixos = players.filter(player => player.position === 'Fixo');
    const alas = players.filter(player => player.position === 'Ala');
    const pivots = players.filter(player => player.position === 'Pivô');

    const groupSize = Math.floor(players.length / 3);

    const groups = [  players.slice(0, groupSize),  players.slice(groupSize, groupSize * 2),  players.slice(groupSize * 2, groupSize * 3),  players.slice(groupSize * 3),];


    // Criar arrays para cada time
    const team1 = [];
    const team2 = [];
    const team3 = [];

    // Atribuir um jogador de cada grupo a cada time
    for (let i = 0; i < groupSize; i++) {
      team1.push(groups[0][i]);
      team2.push(groups[1][i]);
      team3.push(groups[2][i]);
    }

    // Distribuir jogadores restantes aleatoriamente entre os times
    const remainingPlayers = [...groups[0].slice(groupSize), ...groups[1].slice(groupSize), ...groups[2].slice(groupSize)];
    remainingPlayers.forEach(player => {
      const randomIndex = Math.floor(Math.random() * 4);
      switch (randomIndex) {
        case 0:
          team1.push(player);
          break;
        case 1:
          team2.push(player);
          break;
        case 2:
          team3.push(player);
          break;
      }
    })
    let t = [];
    t.push(team1);
    t.push(team2);
    t.push(team3);

    setTeams(t);
    console.log({ team1, team2, team3 });
  }

  return (

    <ImageBackground
      style={styles.container}
      source={{ uri: 'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg' }}
      resizeMode="cover"
    >
      {/* <Text style={styles.title}>UAIPELOTA</Text> */}
      <Image source={Logo} style={{ height: 40, marginTop: 55 }} />

      <Button onPress={sortear} label="SORTEAR" style={{ width: '75%', marginTop: 180, alignSelf: 'center', backgroundColor: 'green' }} />

      <View style={styles.teams}>
        {teams.map((team, index) => {
          return (
            team.map((player, index) => {
              return (
                <View style={styles.team}>
                  <Text>{player.name}</Text>
                </View>
              )
            })

          )
        })}
      </View>

      <Button onPress={() => navigation.goBack()} label="VOLTAR" style={{ width: '75%', position: 'absolute', bottom: 50, alignSelf: 'center', backgroundColor: '#800202' }} />

    </ImageBackground>
  )

}

const styles = StyleSheet.create(
  {

    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: 180,
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
      padding: 20,
    },
    subtitle: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      marginVertical: 25,
      padding: 20,
      marginBottom: 20,

    },
    teams: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    team: {
      backgroundColor: '#800202',
      width: 100,
      height: 100
    },
    input: {
      backgroundColor: '#fff',
      width: '80%',
      height: 40,
      borderRadius: 20,
      fontWeight: 'bold',
      padding: 12,
      alignSelf: 'center',


    },
    label: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 12,
      marginTop: 20,
      marginLeft: 45,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  }

)