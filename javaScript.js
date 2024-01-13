// API KEY = 571edd05e907bc3296f22cb096132047

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
	// console.log(`Your Location is: ${location}`);
	const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			// getting Coordinates
			let coordinates = data.coord;
			const { lat, lon } = coordinates;
			// Distructuring Object
			console.log(`Latitude:${lat} and Longitude: ${lon}`);
			city.textContent = data.name;
			tempDigit.textContent = `${Math.round(data.main.temp)}°C`;
			// temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
			// descriptionElement.textContent = data.weather[0].description;
		})
		.catch(error => {
			console.error('Error fetching weather data:', error);
		});
	city.innerHTML = location;
}
