import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WeatherContext from './WeatherContext';

const WeatherItem = ({ title, value, unit }) => {

    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>)
}

const DateTime = () => {

    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const {data} = useContext(WeatherContext)
   
    const {
        location: { name, country, lat, lon },
        current: { humidity, pressure_mb, wind_mph, feelslike_c, precip_mm }
    } = data;

    useEffect(() => {
        setCurrentDate(moment().format('ddd, Do, MMM'))
        setInterval(() => {
            var time = moment()
                .format('HH:mm');
            setCurrentTime(time);
        }, 1000)
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={{ ...styles.heading, marginTop: 10 }}>{currentTime}</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>{currentDate}</Text>
                </View>
                <View style={styles.weatherItemContainer}>
                    <WeatherItem title='Humidity' value={humidity} unit='%' />
                    <WeatherItem title='Pressure' value={pressure_mb} unit='hPa' />
                    <WeatherItem title='Feels like' value={feelslike_c} unit='&#176;' />
                    <WeatherItem title='Precipitation' value={precip_mm} unit='mm' />
                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.timezone}>{country}, {name}</Text>
                <Text style={styles.coord}>{lon + " " + lat}</Text>
            </View>
        </View>
    )
}

export default DateTime

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    heading: {
        fontSize: 45,
        color: 'white',
        fontWeight: '100'
    },
    subheading: {
        fontSize: 25,
        fontWeight: "300",
        color: '#eee'
    },
    rightAlign: {
        textAlign: 'right',
        marginTop: 20,
    },
    timezone: {
        fontSize: 20,
        color: 'white',
        right: 30
    },
    coord: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    weatherItemContainer: {
        backgroundColor: '#18181b99',
        borderRadius: 10,
        padding: 5,
        marginTop: 20,
    },
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color: '#eee',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: '100'
    }
})
