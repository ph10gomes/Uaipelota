import { TouchableOpacity,Text, StyleSheet } from "react-native"
export default function Button({label, style,onPress}){


    return(

        
        <TouchableOpacity 
          style={[styles.button,style]} 
           onPress={onPress}>
        <Text style={styles.buttonText}>{label}
        </Text>
      </TouchableOpacity>



    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#028039',
        height: 40,
        borderRadius: 20,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    
      }
})