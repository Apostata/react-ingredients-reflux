var Fetch = require('whatwg-fetch');
var baseUrl = "http://localhost:6069";

var service ={
	get:function(url){
		console.log('Making a request');
		return fetch(baseUrl + url) // como o jQuery.ajax(url);
		.then(function(response){ //como jQuery.ajax(url).complete();
			console.log('RES:', response);
			return response.json();
		});
	}
};

module.exports = service;