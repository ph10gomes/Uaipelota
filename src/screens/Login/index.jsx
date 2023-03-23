import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import Button from '../../components/Button';
import Logo from '../../assets/uaipelota.png';

export default function Login() {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  function handleSubmit() {
    console.log({ usuario, password });
    navigation.navigate('Home');
  }
  function changeForm() {
    if (step === 0) {
      setStep(1);
    } else {
      setStep(0);
    }
  }

  function validateForm() {
    if (name === '') {
      Alert.alert('Informe seu nome');
      return;
    }
    if (usuario === '') {
      Alert.alert('Preencha o campo usuario');
      return;
    }
    if (password === '') {
      Alert.alert('Preencha o campo senha');
      return;
    }
    if (repeatpassword === '') {
      Alert.alert('Repita sua senha');
      return;
    }
    if (password !== repeatpassword) {
      Alert.alert('As senhas nao conferem');
      return;
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

      {step == 0 ? (
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <KeyboardAvoidingView style={styles.form} behavior="padding">
            <Text style={styles.label}>Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder=" Digite seu usuário"
              keyboardType='email-address'
              value={usuario}
              onChangeText={setUsuario}

            />

            <Text style={[styles.label, { marginTop: 40 }]}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder=" Sua senha secreta"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <Button label="ENTRAR" onPress={handleSubmit} style={{ width: '80%', alignSelf: 'center' }} />

            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={[styles.textButtons, { marginTop: 30 }]}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeForm}>
              <Text style={[styles.textButtons, { marginTop: 0 }]}>Ainda não possui conta?</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </ScrollView>
      ) : (
        <ScrollView style={{ flex: 1, width: '100%', marginTop: -20 }}>
          <View style={[styles.form, { marginTop: 170 }]}>
            <Text style={styles.label}>Nome</Text>

            <TextInput
              style={styles.input}
              placeholder=" Seu nome completo"
              keyboardAppearance='default'
              value={name}
              onChangeText={setName}

            />
            <Text style={styles.label}>Usuário</Text>

            <TextInput
              style={styles.input}
              placeholder=" Digite seu usuário"
              keyboardType='email-address'
              value={usuario}
              onChangeText={setUsuario}

            />
            <Text style={styles.label}>Senha</Text>

            <TextInput
              style={styles.input}
              placeholder=" Sua senha secreta"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}


            />
            <Text style={styles.label}>Repita sua senha</Text>

            <TextInput
              style={styles.input}
              placeholder=" Sua senha secreta"
              secureTextEntry={true}
              value={repeatpassword}
              onChangeText={setRepeatPassword}
            />

            <Button onPress={validateForm} label="CADASTRAR" style={{ width: '80%', alignSelf: 'center' }} />

            <Button onPress={changeForm} label="VOLTAR" style={{ width: '80%', marginTop: 20, alignSelf: 'center', backgroundColor: '#800202' }} />
          </View>
        </ScrollView>
      )}

    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 50,
  },
  form: {
    marginTop: 270,
    width: '90%',
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
  textButtons: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: 12,
    textAlign: 'center',
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
});
