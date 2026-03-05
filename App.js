import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
   


export default function App() {

    /*return (
       
            <View style={styles.container}>
                <View style={{width : '50', height:'50',backgroundColor : 'powderblue'}}/>
                <View style={{width : '100', height:'100',backgroundColor : 'lightblue'}}/>
                <View style={{width : '50', height:'150',backgroundColor : 'steelblue'}}/>
                <Text>Hello</Text> 
                <Text>Hello</Text> 
                <Text>Hello</Text> 
                <Text>Hello</Text> 
                <Text>Hello</Text> 
                <Text>Hello</Text> 
                <Text>Hello</Text> 
                
                <StatusBar style="auto">
            </View>

    );*/

    /*return (
       
     
          <View style={styles.container}>
            <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'purple'}} />
          </View>
          
       

);*/

return (
    <NavigationContainer>     
        <StackNavigator></StackNavigator>
    </NavigationContainer>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'flex-start',


    },

    textstyle:{
        fontSize: 22,
        color : 'red',
    },
    ImageStyle:{
        width : 200,
        height : 100,
    }

});
