import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native'
import DailyForecast from './DailyForecast'

const WeatherScroll = () => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            {/* <CurrentTempEl></CurrentTempEl> */}
            <DailyForecast></DailyForecast>
        </ScrollView>
    )
}

export default WeatherScroll

const CurrentTempEl = () => {
    return (
        <View style={styles.currentTempContainer}>
            <Image style={styles.img} source={require('../assets/storm.png')} />
            <View style={styles.otherContainer}>
                <Text style={styles.day}>Sunday</Text>
                <Text style={styles.temp}>Night - 28&#176;C</Text>
                <Text style={styles.temp}>Day - 35&#176; C</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
    },
    scrollView: {
        // backgroundColor: '#18181bcc',
        backgroundColor: 'rgba(172, 172, 176, 0.2)',
        borderRadius:10,
        padding: 30,
        flex: 0.4
    },
    currentTempContainer: {
        flexDirection:'row',
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 15,
        marginRight: 10
    },
    day:{
        fontSize: 20,
        color: 'white',
        backgroundColor: '#3c3c44',
        padding:10,
        textAlign:'center',
        borderRadius: 50,
        fontWeight: '200',
        marginBottom: 15,
    },
    temp:{
        fontSize: 16,
        color: 'white',
        fontWeight:'100',
        textAlign:'center'
    },
    otherContainer: {
        paddingRight: 40,

    }
})