import React from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./components/constant";
import { View, StyleSheet } from "react-native";
import WeatherSearch from "./components/weatherSearch";
import WeatherInfo from "./components/weatherInfo";

export default function App() {
  const [weatherData, setWeatherData] = React.useState();

  const searchWeather = (location) => {
    axios
      .get(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Konversi Kelvin ke Celcius
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <WeatherInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
