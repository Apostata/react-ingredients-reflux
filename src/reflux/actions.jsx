var Reflux = require('reflux');

var Actions = Reflux.createActions([ // array com uma lista de ações
	"getIngredients",
	"postIngredient"
]);

module.exports = Actions;
//bem simples assim