module.exports = checkHeader = (req, res, next) => {
  if (req.headers["x-requested-by"] !== "wearther") {
    res.status(403).send("Sorry please use the wearther client app...")
  } else {
    next()
  }
}
