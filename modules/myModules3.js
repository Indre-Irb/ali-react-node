const {randomCityName} = require("random-china-city-name")

module.exports = () => {
    const city = randomCityName()
    return city
}