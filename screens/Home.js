import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';



export default function Home({navigation}) 
{

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('DashboardDrawer')}>
                <Text style={styles.text}>Home</Text>
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
      text: {
        color: "white",
        fontSize: 16
      }
});



