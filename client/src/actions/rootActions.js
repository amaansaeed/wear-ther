export const setWeather = (name, weather) => {
  return {
    type: "SET_WEATHER",
    name,
    weather
  }
}

export const selectDay = day => {
  return {
    type: "SELECT_DAY",
    day
  }
}
