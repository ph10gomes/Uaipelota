import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import StarRating from 'react-native-star-rating'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import Button from '../../components/Button';

import Logo from '../../assets/uaipelota.png'
import Jogador from '../../assets/jogador_a.png'
import ModalPlayer from '../../components/ModalPlayer';

export default function Players() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    //const players = []

    const players = [
        {
            id: '1',
            name: 'Eduardo',
            position: 'Goleiro',
            rating: 5,
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

    const renderItem = ({ item }) => (
        <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#e3e9dd', padding: 5 }}>
                <Image source={Jogador} style={{ width: 45, height: 45, alignSelf: 'center' }} resizeMode='contain' />
            </View>
            <View style={{ width: '65%', marginLeft: 20 }}>
                <Text style={{ color: '#FFF', fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: '#FFF', fontSize: 12 }}>{item.position}</Text>
            </View>
            <View style={{ width: '35%', position: 'absolute', right: 0, alignItems: 'center' }}>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={item.rating}
                    starSize={16}
                    fullStarColor={'#F2DB2E'}
                />
                <Text style={{ color: '#FFF', fontSize: 12 }}>{level(item.rating)}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <>
        <ImageBackground
            style={styles.container}
            source={{ uri: 'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg' }}
            resizeMode="cover"
        >
            <Image source={Logo} style={{ height: 40, position: 'absolute', top: 55 }} />

            {players.length === 0 ? (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: 100 }}>
                    <Text style={styles.subtitle}>Nenhum jogador cadastrado</Text>
                    <Text style={styles.description}>Pressione o botão abaixo para cadastrar seu primeiro jogador</Text>
                    <Button onPress={() => navigation.goBack()} label="Adicionar jogador" style={styles.addButton} />
                </View>
            ) : (
                <View style={styles.area}>
                    <Text style={styles.title}>Lista de Jogadores ({players.length})</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.title}>+</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={players}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )}

            <Button onPress={() => navigation.goBack()} label="VOLTAR" style={styles.button} />
        </ImageBackground>
        <ModalPlayer modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
        marginVertical: 20,
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
