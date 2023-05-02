import React, { createContext, useState, Alert } from 'react';
import bdPlayer from '../screens/sqlite/players';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   const [player, setPlayer] = useState({
      id: '',
      name: '',
      position: '',
      rating: '',
   });

   function createAccount(player) {
      bdPlayer.create(player)
         .then((id) => {
            console.log('Usuário criado com sucesso!');
            setPlayer({
               id: player.id,
               name: player.name,
               position: player.position,
               rating: player.rating 
            });

         })
         .catch((error) => {
            console.log('Erro ao criar usuário: ' + error.message);
         });
   }
   return (
      <AuthContext.Provider value={{player, createAccount}}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthProvider;