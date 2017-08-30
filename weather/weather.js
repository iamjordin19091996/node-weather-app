const request = require('request');

var getWeather = (lat, lng, callback) =>{

	request({ 
		url: `https://api.darksky.net/forecast/fc38d471f2f7535e25b5f9ddaca9d427/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to forecast.io server');
		} else if (response.statusCode === 400) {
			callback('Unable to fetch weather');
		} else if (response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	});
 };

 module.exports.getWeather = getWeather;