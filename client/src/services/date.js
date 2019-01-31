export const getTime = rawTime => {
  const timeObj = new Date(rawTime * 1000)
  return `${timeObj.getHours()}:${timeObj.getMinutes() === 0 ? "00" : timeObj.getMinutes()}`
}
