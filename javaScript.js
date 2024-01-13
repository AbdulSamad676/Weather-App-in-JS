// API KEY = 571edd05e907bc3296f22cb096132047

let latiData = document.getElementById('langitude');
latiData.style.backgroundColor = 'none';
const apiKey = '2888b5e36cc53f64de15e13abaefc2b8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const form = document.querySelector('.form');
// console.log(form);

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let formData = new FormData(e.target);
	let inputField = formData.get('inputText');
	getWeather(inputField);
	// console.log(inputField);
});

function getWeather(location) {
	let city = document.querySelector('.cityName');
	let tempDigit = document.querySelector('.tempDigit');
	let statusData = document.querySelector('.statusData');
	// console.log(`Your Location is: ${location}`);
	const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			// getting Coordinates
			console.log(data);
			let coordinates = data.coord;
			// Distructuring Object
			setCoordinates(coordinates);
			city.textContent = `${data.name}`;
			tempDigit.textContent = `${Math.round(data.main.temp)}°C`;
			tempDigit.style.border = '1px solid white';
			tempDigit.style.borderRadius = '10px';
			// temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
			statusData.textContent = data.weather[0].description;
			statusData.style.backgroundColor = 'white';
			// statusData.style.padding = '10px';
		})
		.catch(error => {
			console.error('Error fetching weather data:', error);
		});
	city.innerHTML = location;
}
function setCoordinates(coordinates) {
	const { lat, lon } = coordinates;
	// console.log(`Latitude:${lat} and Longitude: ${lon}`);
	let latitude = document.getElementById('langitude');
	let laptitude = document.getElementById('laptitude');

	latitude.textContent = `${lat} ° N`;
	latitude.style.backgroundColor = 'white';
	laptitude.textContent = `${lon}° E`;
	laptitude.style.backgroundColor = 'white';
}
