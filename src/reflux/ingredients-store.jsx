var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({

	listenables:[Actions],

	getIngredients:function(){
		HTTP.get('/ingredients')
		.then(function(json){
			this.ingredients = json;
			this.fireUpdate();
		}.bind(this)); //referenciar o scopo do bind para a classe List ao inves de HTTP
	},

	postIngredient:function(text){
		//posted ingredient to the server
		// now we got a successful callback

	},

	//refresh function
	fireUpdate:function(){
		this.trigger('change', this. ingredients);
	}

});

module.exports = IngredientStore;

/*
é possivel também exportar mais de um objeto:
	module.exports = {
		Ingredient: IngredientStore,
		Todo: TodoStore 
	}

*/