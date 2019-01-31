import weather from "../dummy_data/weather_westeros.json"

const initState = {
  currentLocation: "Westeros",
  selected: 0,
  weather: weather
}

export default function reducers(state = initState, action) {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        currentLocation: action.name,
        weather: action.weather,
        selected: 0
      }
    case "SELECT_DAY":
      return {
        ...state,
        selected: action.day
      }
    default:
      return state
  }
}
