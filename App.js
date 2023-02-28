import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Luana</Text>
      
      <View style={styles.row}>
      <TouchableOpacity style={[styles.button, {backgroundColor:'#028039'}]}>
        <Text style={styles.textbutton}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textbutton}>Voltar</Text>
      </TouchableOpacity>
      </View>
     
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize : 36,
    color: '#fff'

  },
  button:{
    marginVertical:20,
    marginHorizontal: 10,
    backgroundColor:'#800202',
    width: 200,
    height:40,
    alignItems:'center',
    justifyContent: 'center',
    padding:8,
    borderRadius:20,

  },
  textbutton:{
    color:'#fff',
    fontSize: 20,
    textTransform:'uppercase',
    fontWeight:'bold',

  },
  row:{
    flexDirection:'row',
  }
});
