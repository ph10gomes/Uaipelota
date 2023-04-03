import { useNavigation } from '@react-navigation/native'
import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground, Image, TextInput,ScrollView} from 'react-native'
import Logo from '../../assets/uaipelota.png';

export default function Forgot() {
    const navigation = useNavigation();
     const [email, setEmail] = useState('');

    return (
        
        <ImageBackground
      style={styles.container}
      source={{ uri: 'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg' }}
      resizeMode="cover"
>
      {/* <Text style={styles.title}>UAIPELOTA</Text> */}
      <Image source={Logo} style={{ height: 40, marginTop: 55 }} />
      <Text style={styles.title}>ESQUECI MINHA SENHA</Text>
      <Text style={styles.subtitle}>PARA REDEFINIR SUA SENHA, INFORME O E-MAIL 
CADASTRADO NA SUA CONTA E LHE ENVIAREMOS 
UM LINK COM AS INSTRUÇÕES.</Text>


 <Text style={styles.label}> E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder=" Digite seu E-MAIL"
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
              ></TextInput>
              

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
            padding:20,
        },
        subtitle:{
            fontSize:15,
            color:'#fff',
            fontWeight:'bold',
            marginVertical:25,
            padding:20,
            

        },
    }

)