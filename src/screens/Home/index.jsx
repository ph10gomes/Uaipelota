import { useNavigation } from '@react-navigation/native'
import{View,Text, StyleSheet, TouchableOpacity} from 'react-native'
export default function Home(){
    const navigation = useNavigation();


return(


    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity  onPress={()=> navigation.goBack()}>
            <Text>Voltar</Text>
        </TouchableOpacity>
    </View>
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
            marginTop: 250,
            color:'orange',
            fontSize:48,
            fontWeight:'bold',
        },
    }
)