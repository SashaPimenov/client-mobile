import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

export default function ThemeAndLanguageComponent(props:{func:any, secondFunc:any}) {
    return (
        <View style={styles.ThemeAndLanguageView}>
            <TouchableOpacity style={[{width:'48%', height:'100%'}]} onPress={props.func}>
                <LinearGradient style={styles.ThemeAndLanguage} colors={['#56439E','#FF0000']}>
                    <Text style={styles.textStyle}>Русский язык</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[{width:'48%', height:'100%'}]} onPress={props.secondFunc}>
                <LinearGradient style={styles.ThemeAndLanguage} colors={['#000000','#1C1C1C']}>
                    <Text style={styles.textStyle}>Включить тёмную тему</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    ThemeAndLanguage: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        height:'100%',
        width: '100%'
    },
    ThemeAndLanguageView:{
        flexDirection:'row',
        marginTop:'5%',
        alignSelf:'center',
        justifyContent:'space-between',
        height:180,
        width:'90%',
        marginBottom:'5%',
        shadowOpacity:0.15,
        elevation: 15,
        shadowOffset: {width: 7, height: 7},
    },
});
