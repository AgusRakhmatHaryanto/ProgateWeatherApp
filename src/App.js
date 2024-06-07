import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherSearch from './components/weatherSearch'
import WeatherInfo from './components/weatherInfo'

export default function App ()  {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
