const express = require("express")
const router = express.Router()

//  middleware
const checkHeader = require("../middleware/check_header")

//  API's
const darkSky = require("../services/dark_sky")
const locationIQ = require("../services/location_IQ")

router.get("/location", checkHeader, async (req, res) => {
  const query = req.query.q

  const { data } = await locationIQ.request({
    params: { q: query }
  })

  const locations = data.map(location => {
    if (location.class === "place" || true) {
      return {
        display_name: location.display_name,
        lat: location.lat,
        lon: location.lon
      }
    }
  })

  res.json(locations)
})

router.get("/weather", checkHeader, async (req, res) => {
  const { lat, lon } = req.query

  const { data } = await darkSky.get(`/${lat},${lon}`)
  res.json(data)
})

module.exports = router
