citySearchEl = document.querySelector('#city-form')
var cityInputEl = document.getElementById('cityInput');
console.log(cityInputEl);


function searchSubmitHandler(event) {
	event.preventDefault();
	var city = cityInputEl.value.trim();
	console.log(city);
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
		});
	} else {
		alert("Error: " + response.statusText);
	}
	})
	.catch(function(error) {
		alert("Unable to connect to Open Weather");
	});
};
citySearchEl.addEventListener("submit", searchSubmitHandler);
