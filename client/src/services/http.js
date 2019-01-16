import axios from "axios"

const darkSky = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: `${process.env.REACT_APP_DS_API_BASEURL}/${process.env.REACT_APP_DS_API_KEY}`,
  params: { units: "ca" }
})

const locationIQ = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: process.env.REACT_APP_LIQ_API_BASEURL,
  params: {
    key: process.env.REACT_APP_LIQ_API_KEY,
    format: "json"
  }
})

export { darkSky, locationIQ }
