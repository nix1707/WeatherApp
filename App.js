import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground} from 'react-native';
import { WeatherService } from './services/weather.service';
import { StatusBar } from 'expo-status-bar';
import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';
import WeatherContext from './components/WeatherContext';

const img = require('./assets/background9.jpg')

export default function App() {

  const [data, setWeatherData] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const weather = await WeatherService.getForecast('Lviv');
      setWeatherData(weather);
    }
    fetchData()
  }, [])


  if (data == null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color='gray' size={36} />
      </View>

    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <ImageBackground style={styles.image} source={img}>
        <WeatherContext.Provider value={{data}}>
          <DateTime></DateTime>
          <WeatherScroll></WeatherScroll>
        </WeatherContext.Provider>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  primaryText: {
    margin: 20,
    fontSize: 28
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});