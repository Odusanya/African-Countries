var data = require('/data/countries.json');
var countries = [];

function populateCountries(key) {
	var country = { 'Code': key };
	var countryProps = data[key];
	function setCountryProperty (key) {
		Object.assign(country, { [key]: countryProps[key] });
	}

	Object.keys(countryProps).forEach(setCountryProperty);
	countries.push(country);
}
Object.keys(data).forEach(populateCountries);

exports.getCountryFromCode = function(code) {
	return data[code.toUpperCase()];
};

exports.listCountries = function () {
	return countries;
};

exports.getRawData = function getRawData() {
	return data;
};

exports.getCountryFromName = function(name) {
	var errorMessage = "Having trouble finding '"+ name +"' on our list, please enter a more specific name or try using the getCountryFromCode() method instead";
	var info = countries.find(function findCountry(elem) {
		return elem["Country Name"].toLowerCase() === name.toLowerCase();
	});
	if (typeof info === 'undefined') throw errorMessage;
	return info;
};