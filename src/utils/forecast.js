const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=53b79a299bd901eedeff19daf7a6e03c&query=' + longitude + ',' + latitude + '&units=f'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find loation', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast