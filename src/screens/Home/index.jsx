import { useNavigation } from '@react-navigation/native'
import{View,Text, StyleSheet,ImageBackground, TouchableOpacity} from 'react-native'

export default function Home(){
    const navigation = useNavigation();


return(
    
    <ImageBackground
    style={styles.container}
    source={{
      uri:
        'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg'

    }}
    resizeMode="stretch"
  >

  
    
        <Text style={styles.title}>UAIPELOTA</Text>

        
        <TouchableOpacity  onPress={()=> navigation.goBack()}>
            <Text>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          
          
        </TouchableOpacity>
 </ImageBackground>
 
)

}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        },
        title:{
            fontSize: 36,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 30,
            marginTop: -350,
        },
    
        button:{
        backgroundColor: '#028039',
        height: 40,
        borderRadius: 20,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    }
);
