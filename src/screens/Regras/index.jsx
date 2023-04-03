import { useNavigation } from '@react-navigation/native'
import StarRating from 'react-native-star-rating'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import Button from '../../components/Button';

import Logo from '../../assets/uaipelota.png'
import Jogador from '../../assets/jogador_a.png'

export default function Regras() {
const navigation = useNavigation();
return (
    <ImageBackground
            style={styles.container}
            //source={Background}
            source={{ uri: 'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg' }}
            resizeMode="cover" >
                <Image source={Logo} style={{ height: 40, position: 'absolute', top: 55 }} />
                <View style={styles.container}>
        <Text style={styles.title}>Regras</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>

    
)

}

const styles = StyleSheet.create(
{
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 250,
        color: 'orange',
        fontSize: 48,
        fontWeight: 'bold',
    },
}
)