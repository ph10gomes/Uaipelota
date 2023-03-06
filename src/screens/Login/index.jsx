import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, ImageBackground,TouchableOpacity} from 'react-native';

export default function Login() {
  return (
    <ImageBackground 
    style={styles.container}
        source ={{
            uri : 
            'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg'

        }}
        resizeMode ="contain"
>
      <Text style = {styles.title}> Bem-Vindo</Text>
      
      <View style = {styles.form}>
      <Text style={styles.label}>Usuário</Text>
      
      <TextInput
      style={styles.input}
      placeholder= "Digite seu usuário"
      keyboardAppearance='e-mail-address'

/>
<Text style={styles.label}>Senha</Text>
      
      <TextInput
      style={styles.input}
      placeholder= "Sua senha secreta"
       textSecurityEntry={true}


/>
<TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Entrar
    </Text>
</TouchableOpacity>

<TouchableOpacity>
<Text style = {[styles.label,{textAlign:'center'}]}>Cadastre-se grátis!</Text>
</TouchableOpacity>

   </View>
</ImageBackground>
   
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize : 36,
    color: '#fff',
    fontWeight:'bold',
    marginBottom:30,

  },
  form:{
    marginTop:30,
    width:'90%',
    
 
 },
  label:{

    color: '#fff',
    fontSize:16,
    marginBottom:12,
    marginTop:20,
    marginLeft:10,
  },
  input:{
    backgroundColor:'#fff',
    width:'100%',
    height: 40,
    borderRadius:20,
    fontWeight:'bold',
  },
  button:{
    backgroundColor:'#028039',
    height:40,
    borderRadius:20,
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    color:'#fff',
    fontSize:18,
    textTransform:'uppercase',
    fontWeight:'bold'

  }

});
