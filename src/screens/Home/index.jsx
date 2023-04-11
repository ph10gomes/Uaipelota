import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Apito from '../../assets/apito.png'
import Logo from '../../assets/uaipelota.png'
import Player from '../../assets/player.png'
import Tampinhas from '../../assets/tampinhas.png'
import Button from '../../components/Button';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            style={styles.container}
            //source={Background}
            source={{ uri: 'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg' }}
            resizeMode="cover"
        >
            <Image source={Logo} style={{ height: 40, position: 'absolute', top: 55 }} />

            <View style={styles.cardArea}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Players')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10 }}>
                        <View style={styles.leftAside}>
                            <Text style={styles.cardTitle}>Adicionar jogador</Text>
                            <Text style={styles.description}>Cadastro e manutenção de peladeiros</Text>
                        </View>
                        <View style={{ width: 50, height: 50, backgroundColor: "#4BAE4F", borderRadius: 25, justifyContent: 'center' }}>
                            <Image source={Player} style={{ width: 45, height: 45, alignSelf: 'center' }} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress ={()=> navigation.navigate('Sorteio')}> 
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10 }}>
                        <View style={styles.leftAside}>
                            <Text style={styles.cardTitle}>Sortear Times</Text>
                            <Text style={styles.description}>Defina os jogadores da lista e sorteie rapidamente times nivelados</Text>
                        </View>
                        <View style={{ width: 50, height: 50, backgroundColor: "#4BAE4F", borderRadius: 25, justifyContent: 'center' }}>
                            <Image source={Tampinhas} style={{ width: 50, height: 50, alignSelf: 'center' }} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress ={()=> navigation.navigate('Regras')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10 }}>
                        <View style={styles.leftAside}>
                            <Text style={styles.cardTitle}>Regras</Text>
                            <Text style={styles.description}>Defina o horário, tamanho da lista e demais regras da pelada</Text>
                        </View>
                        <View style={{ width: 50, height: 50, backgroundColor: "#4BAE4F", borderRadius: 25, justifyContent: 'center' }}>
                            <Image source={Apito} style={{ width: 35, height: 35, alignSelf: 'center' }} resizeMode='contain' />
                        </View>
                    </View>
                </TouchableOpacity>

                <Button onPress={() => navigation.goBack()} label="VOLTAR" style={{ width: '75%', marginTop: 20, alignSelf: 'center', backgroundColor: '#800202' }} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14A085',
    },
    cardArea: {
        width: '100%',
        alignItems: 'center',
        marginTop: 250,
    },
    card: {
        backgroundColor: '#F1F3F4',
        width: '75%',
        height: 70,
        borderRadius: 10,
        marginVertical: 20,
        elevation:5,
    },
    leftAside: {
        width: '80%',
    },
    cardTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        color: '#666',
    }
}
);
