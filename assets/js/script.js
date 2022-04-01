var searchBtnEl = document.querySelector('#city-form')
var cityInputEl = document.getElementById('cityInput');
console.log(cityInputEl);


function searchSubmitHandler(event) {
	event.preventDefault();
	var city = cityInputEl.value.trim();
	getCityCoord(city);
}

function getCityCoord(cityInput) {
	var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=a51ce040ba6bfdc6e43f599f12506bd1"
	
	fetch(apiUrl).then(function(response) {
	if (response.ok) {
		response.json().then(function(data) {
			console.log(data);
			var cityLat = data[0].lat;
			var cityLon = data[0].lon;
			console.log(cityLat);
			console.log(cityLon);
			getWeather(cityLat, cityLon);
		});
	} else {
		alert("Error: " + response.statusText);
	}
	})
	.catch(function(error) {
		alert("Unable to connect to Open Weather");
	});
};

function getWeather(lat, lon) {
	var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon + "&appid=a51ce040ba6bfdc6e43f599f12506bd1"
	fetch(apiURL).then(function(response) {
		if (response.ok) {
			response.json().then(function(data) {
				console.log(data);
				console.log(data.current);
				console.log(data.current.weather);
				weatherObj = data.current;
				displayWeather(weatherObj);
			});
		}
	})
}

function displayWeather() {
	currentConditions = weatherObj[0].main;
	console.log(currentConditions);
}
searchBtnEl.addEventListener("submit", searchSubmitHandler);
