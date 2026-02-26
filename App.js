import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {provider} from 'react-redux';

export default function App() {

    return (
       
            <view style={styles.container}>
                <view style={{ width:50 , height: 50, backgroundColor : 'powderblue'}}></view>
                <view style={{ width:100 , height: 100, backgroundColor : 'skyblue'}}></view>
                <view style={{ width:150 , height: 150, backgroundColor : 'blue'}}></view>
                <StatusBar style="auto"/>
            </view>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
