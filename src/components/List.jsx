var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({

	mixins:[Reflux.listenTo(IngredientStore, "onChange")],

	getInitialState:function(){
		return {ingredients: []};
	},
 
	componentWillMount:function(){// quando o component esta pronto
		Actions.getIngredients(); //procura a ação getIngredients em Actions, que delega para Ingredients-store
	},

	onChange:function(event, ingredients){//esta é a funcção que vai recebar os dados da Ingredient-store
		this.setState({ingredients:ingredients});
	},

	render:function(){
		var listItem = this.state.ingredients.map(function(item){
			return <ListItem key={item.id}  ingredient={item.text} />;
		});

		return (
			<ul>{listItem}</ul>
		);
	}
});
module.exports = List;