const randomPhoto = require("cool-images")

module.exports = () => {
    const photo = randomPhoto.one()
    return photo
}
