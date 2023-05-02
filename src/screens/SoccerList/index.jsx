import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList} from "react-native";
import Button from "../../components/Button";
import ModalPlayer from "../../components/ModalPlayer";


import Logo from "../../assets/uaipelota.png";
import Jogador from '../../assets/jogador_a.png'

export default function SoccerList() {
   const navigation = useNavigation();
   const [selectedPlayers, setSelectedPlayers] = useState([]);
   const [selectedItems, setSelectedItems] = useState([]);
   const [isSelected, setSelection] = useState(false);
   
    //const players = []

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

  const level = (rating) => {
      if (rating === 5) {
          return 'Craque'
      } else if (rating >= 4.5 && rating < 5) {
          return 'Jogador importante'
      } else if (rating >= 4 && rating < 4.5) {
          return 'Joga bem'
      } else if (rating >= 3.5 && rating < 4) {
          return 'Jogador comum'
      } else if (rating >= 3 && rating < 3.5) {
          return 'Não compromete'
      } else if (rating >= 2.5 && rating < 3) {
          return 'Vacila um pouco'
      } else if (rating >= 2 && rating < 2.5) {
          return 'Tem que melhorar'
      } else if (rating >= 1.5 && rating < 2) {
          return 'Jogador fraco'
      } else {
          return 'Perna de pau'
      }
  }
  const togglePlayerSelection = (playerId) => {
   const updatedPlayers = players.map(player => {
     if (player.id === playerId) {
       return {
         ...player,
         selecionado: !player.selecionado,
       }
     }
     return player;
   });
   setSelectedPlayers(updatedPlayers.filter(player => player.selecionado));
 };


 const renderItem = ({ item }) => (
   <View style={styles.item}>
     <Text>{item.name}</Text>{/*
     <CheckBox
       value={selectedItems.includes(item)}
       onValueChange={(newValue) => {
         if (newValue) {
           setSelectedItems([...selectedItems, item]);
         } else {
           setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
         }
       }}
    />*/}
   </View>
 );
    

return (
   <>
   <ImageBackground
       style={styles.container}
       source={{ uri: 'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg' }}
       resizeMode="cover"
   >
       <Image source={Logo} style={{ height: 40, position: 'absolute', top: 55 }} />
{/*
       <CheckBox
    onValueChange={() => checkBoxChanged()} 
/>*/}
{/*<CheckBox
   value={isSelected}
   onValueChange={setSelection}
   title="Checkbox"
   checkedTitle="Checkbox Selecionado"
   color="#FF0000"
   tintColor="#00FF00"
/>*/}
{/*checkBoxChanged(){ *}
this.setState({isSelected : !this.state.isSelected})
*/}
           <View style={styles.area}>
               <Text style={styles.title}>Selecione os jogadores ({players.length})</Text>
               
               <FlatList
               data={players}
               keyExtractor={item => item.id}
               renderItem={renderItem}
               contentContainerStyle={styles.playersContainer}
      />
           </View>
       
       <Button label ="CONFIRMAR" onPress={() => navigation.navigate('TelaDeConfirmacao', { jogadoresSelecionados: selectedPlayers })} style={styles.button}/>
       <Button onPress={() => navigation.goBack()} label="VOLTAR" style={styles.button} />
   </ImageBackground>
   
   </>
)
}

const styles = StyleSheet.create({
container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#14A085',
},
title: {
   
   color: '#FFF',
   fontSize: 18,
   marginVertical: 10,
   fontWeight: 'bold',
   textAlign: 'center',
   textTransform: 'uppercase',
},
subtitle: {
   color: '#FFF',
   fontSize: 18,
   marginTop: 50,
   fontWeight: 'bold',
   textAlign: 'center',
   textTransform: 'uppercase',
},
description: {
   color: '#FFF',
   fontSize: 12,
   textAlign: 'center',
   marginTop: 25,
   textTransform: 'uppercase',
},
addButton: {
   width: 250,
   borderRadius: 25,
   backgroundColor: '#14A085',
   alignItems: 'center',
   justifyContent: 'center',
},
button: {
   width: '75%',
   position: 'absolute',
   bottom: 30,
   alignSelf: 'center',
   backgroundColor: '#800202'
},
area: {
   marginTop: 200,
   maxHeight: '60%',
   width: '100%',
   padding: 30
},
}
);