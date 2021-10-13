const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
   
    console.log('Please provide address')

} else {
   
    geocode(process.argv, (error, {lat, long, location} = {}) => {
        console.log('Part 1: Lat '+ lat + ' ' + ' Long ' + long + ' location ' + location)
        if (error){
            return console.log(eror)
        }
        
        forecast(lat, long, (error, forecastData) => {
    
            if (error){
                return console.log(eror)
            }
            
            const {weatherDescription, temp, feelslike} = forecastData
            console.log('Error', error)
            console.log('forecastData', forecastData)
            console.log("Today's weather is " + weatherDescription + ". It is currently " + temp + " degress out. It feels like " + feelslike + " degress out")
        })
    })
    
}

