import { weather } from "./store"

const initState = {
  currentLocation: "",
  weather: weather
}

export default function reducers(state = initState, action) {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        currentLocation: action.name,
        weather: action.weather
      }
    default:
      return state
  }
}
