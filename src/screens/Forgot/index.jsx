import { useNavigation } from '@react-navigation/native'
import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground, Image, TextInput,ScrollView} from 'react-native'
import Button from '../../components/Button';
import Logo from '../../assets/uaipelota.png';

export default function Forgot() {
    const navigation = useNavigation();
     const [email, setEmail] = useState('');
     function changeForm() {
        if (step === 0) {
          setStep(1);
        } else {
          setStep(0);
        }
      }


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

<ScrollView style={{ width: '100%', marginTop: -20 }}>
          <View style={[styles.form]}>
            
 <Text style={styles.label}> E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder=" Digite seu E-MAIL"
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
              ></TextInput>
              <Button onPress={changeForm} label="VOLTAR" style={{ width: '80%', marginTop: 20, alignSelf: 'center', backgroundColor: '#800202' }} />
              </View>
              </ScrollView>

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
            marginBottom:20,

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