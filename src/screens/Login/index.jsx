import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

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
    source={{
      uri:
        'https://i.pinimg.com/564x/ab/6a/12/ab6a126748031b76fbfadae55da925f1.jpg'

    }}
    resizeMode="stretch"
  >
    <Text style={styles.title}>UAIPELOTA</Text>

    {step == 0 ? (
      <KeyboardAvoidingView style={styles.form} behavior="padding">

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
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeForm}>
          <Text style={[styles.label, { textAlign: 'center' }]}>Cadastre-se grátis!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text style={[styles.label, { textAlign: 'center', marginTop: 0 }]}>Esqueci a senha</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    ) : (
      <View style={[styles.form, {marginTop:170}]}>
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
        <TouchableOpacity style={styles.button} onPress={validateForm}>
          <Text style={styles.buttonText}>Cadastrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeForm}>
          <Text style={[styles.label, { textAlign: 'center' }]}>Ja possuo conta!</Text>
        </TouchableOpacity>

      </View>
    )}

  </ImageBackground>


);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000',
    alignItems: 'center',
    //justifyContent: 'center',
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
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#028039',
    height: 40,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'

  }

});
