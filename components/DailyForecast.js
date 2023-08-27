import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import moment from 'moment'
import { LinearGradient } from 'expo-linear-gradient'
import WeatherContext from './WeatherContext'

const DailyForecast = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <DailyForecastItem></DailyForecastItem>
        </View>
    )
}

export default DailyForecast

const DailyForecastItem = () => {    
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const {data} = useContext(WeatherContext);

    const toggleSelectedItem = (index) => {
        setSelectedItemIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };
    return (
    <>
        {data.forecast.forecastday.map((item, idx) => (
            <TouchableHighlight
                onPress={() => toggleSelectedItem(idx)}
                style={{...styles.dailyForecastItemContainer, 
                    borderColor: idx === selectedItemIndex ? 'white' : '#1c0530'}}
                activeOpacity={0.6}
                underlayColor="rgba(0,0,0, 0.4)"
                key={idx}>
                <View >
                    <LinearGradient
                        style={styles.dayGradient}
                        colors={['#4e369e', '#b450e6']}
                        start={{ x: 0, y: 0.75 }}
                        end={{ x: 1, y: 0.25 }}  >
                        <Text style={styles.day}>{moment(item.date).format('dddd')}</Text>
                    </LinearGradient>
                    <Image
                        source={{ uri: `http:${item.day.condition.icon}` }}
                        style={styles.image} />
                    <Text style={styles.temp}>Temp - {item.day.avgtemp_c}&#176;</Text>
                    <Text style={styles.temp}>Rain - {item.day.daily_chance_of_rain}%</Text>
                </View>
            </TouchableHighlight>
        ))}
    </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginLeft: 10
    },
    dailyForecastItemContainer: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#00000033',
        backgroundColor: 'rgba(0, 0, 0,0.45)',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        padding: 20,
        // marginLeft: 10,
        marginRight: 40
    },
    temp: {
        fontSize: 18,
        color: 'white',
        fontWeight: '100',
        textAlign: 'center'
    },
    dayGradient: {
        color: 'white',
        borderRadius: 50,
        marginBottom: 15,
    },
    day: {
        padding: 10,
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 22,
        color: 'white'
    }
})