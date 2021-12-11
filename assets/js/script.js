citySearchEl = document.querySelector('#city-form')
var cityInputEl = document.getElementById('cityInput');
console.log(cityInputEl);


function searchSubmitHandler(event) {
	event.preventDefault();
	var city = cityInputEl.value.trim();
	console.log(city);
}

citySearchEl.addEventListener("submit", searchSubmitHandler);
