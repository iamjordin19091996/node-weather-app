const yargs = require('yargs');

const weather = require('./weather/weather.js');
const geocode = require('./geocode/geocode.js');

const argv = yargs 
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'address to fetch for',
			string: true
		}
	})
	.help()
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else {
		console.log('Address: ',results.address);
		weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
		if(errorMessage) {
			console.log('errorMessage');
		}
		else {
			console.log('Temperature: ',weatherResults.temperature);
			console.log('Apparent Temperature: ',weatherResults.apparentTemperature);
		}
});
	}
});


