const axios = require("axios")

const locationIQ = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: process.env.LOCATION_IQ_API_BASEURL,
  params: {
    key: process.env.LOCATION_IQ_API_KEY,
    format: "json"
  }
})

module.exports = locationIQ
