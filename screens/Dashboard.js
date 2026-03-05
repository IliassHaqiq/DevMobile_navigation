import {Button, Text,View,StyleSheet,TouchableOpacity} from 'react-native';



export default function Dashboard({navigation}) {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: 'white'}}>
            <Text>Dashboard Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text1}>Dashboard</Text>
            </TouchableOpacity>
            
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10
      },
      text1: {
        color: "white",
        fontSize: 16
      },
      text: {
        color: "white",
        fontSize: 32
      }
});