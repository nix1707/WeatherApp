import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet, Text, Button, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';


const Main = ({ data }) => {
    const { weather,
        name,
        main: { temp, humidity },
        wind: { speed }
    } = data;
    const [{ main, description, icon }] = weather;
    // const[{description}] = weather;

    return (
        <View style={styles.container}>


            <ScrollView horizontal={true} paggingEnable>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                    </View>

                </View>
            </ScrollView>


        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 36,
        color: 'white',
        top: 50,
        left: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10,
        width: '80%',
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        height: 100,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 10,
        maxWidth: '480px',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
})