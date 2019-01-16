export const setWeather = (name, weather) => {
  return {
    type: "SET_WEATHER",
    name: name,
    weather: weather
  }
}
