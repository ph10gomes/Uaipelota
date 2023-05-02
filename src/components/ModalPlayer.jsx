
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Button from './Button';
import StarRating from 'react-native-star-rating';
import players from '../screens/sqlite/players';


const ModalPlayer = ({ modalVisible, setModalVisible }) => {
    const [rating, setRating] = useState(3.5);
    const [name, setNome] = useState('');
    const [position, setPosition] = useState('');


    const jogador ={
       name : name,
       position : position,
       rating : rating,
    };

    const handleAdicionarJogador = () => {
        if (name.trim() === ''){
            Alert.alert('Erro', 'Por favor, informe o Nome do jogador e a Posição.');
            return;
        }
        else if(position.trim() === ''){
            Alert.alert('Erro', 'Por favor, informe a Posição.');
            return;
        }
        
        players.create(jogador);
        setModalVisible(false);
    }

    return (
<<<<<<< HEAD
        
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>Novo jogador</Text>
                        <Text style={styles.modalText}>Eduardo você é fera, voce mora aqui❤</Text>

                        <Button onPress={() => setModalVisible(!modalVisible)} label="CANCELAR" style={styles.button} />

=======
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Novo jogador</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do jogador"
                        value={name}
                        onChangeText={setNome}
                    />
                    <Text style={styles.nivelText}>Posição do Jogador</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={[styles.card, position === "Pivo" && styles.active]} onPress={() => setPosition("Pivo")}>
                            <Text style={styles.txtCard}>Pivo </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.card, position === "Ala" && styles.active]} onPress={() => setPosition("Ala")}>
                            <Text style={styles.txtCard}>Ala </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.card, position === "Goleiro" && styles.active]} onPress={() => setPosition("Goleiro")}>
                            <Text style={styles.txtCard}>Goleiro </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.card, position === "Fixo" && styles.active]} onPress={() => setPosition("Fixo")}>
                            <Text style={styles.txtCard}>Fixo </Text>
                        </TouchableOpacity>
>>>>>>> origin/bruno
                    </View>


                    <Text style={styles.nivelText}>Nível do jogador</Text>

                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={rating}
                        selectedStar={(rating) => setRating(rating)}
                        starSize={22}
                        fullStarColor={'#F2DB2E'}
                    />

                    <Button label="CADASTRAR" onPress={handleAdicionarJogador} style={styles.cadastrarButton} />
                    <Button onPress={() => setModalVisible(!modalVisible)} label="CANCELAR" style={styles.button} />
                    
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    cadastrarButton: {
        width: '75%',
        position: 'absolute',
        bottom: 80,
        alignSelf: 'center',
        backgroundColor: '#028039'
    },
    nivelText: {
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#F1F3F4',
        width: 55,
        height: 55,
        borderRadius: 10,
        margin: 10,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    active: {
        backgroundColor: '#F1F3F4',
        borderColor: '#028039',
        borderWidth: 4,
        width: 55,
        height: 55,
        borderRadius: 10,
        margin: 14,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    txtCard: {
        color: '#333',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 0,
    },
    modalView: {
        width: 300,
        height: 500,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 20,
        textAlign: 'center',

    },
    button: {
        width: '75%',
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: '#800202'
    },
});
export default ModalPlayer;