// API KEY = 571edd05e907bc3296f22cb096132047

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
	console.log(`Your Location is: ${location}`);
}
